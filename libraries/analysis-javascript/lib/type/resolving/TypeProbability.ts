/*
 * Copyright 2020-2023 Delft University of Technology and SynTest contributors
 *
 * This file is part of SynTest Framework - SynTest Javascript.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { prng } from "@syntest/core";

import {
  ComplexType,
  isComplexType,
} from "../discovery/complex-type/ComplexType";

import { TypeEnum } from "./TypeEnum";

/**
 * Type Probability Map
 * Stores information about the probability a certain element/relation is a certain identifierDescription
 *
 * @author Dimitri Stallenberg
 */

export class TypeProbability {
  private id: string;

  private scores: Map<string, number>;
  private probabilities: Map<string, number>;

  private typeIsTypeProbability: Map<string, TypeProbability>;
  private typeIsComplexType: Map<string, ComplexType>;

  totalScores: number;
  scoresChanged: boolean;

  private executionScores: Map<string, number>;

  /**
   * Constructor
   */
  constructor() {
    this.id = prng.uniqueId();

    this.scores = new Map();
    this.probabilities = new Map();

    this.typeIsTypeProbability = new Map();
    this.typeIsComplexType = new Map();

    this.totalScores = 0;
    this.scoresChanged = true;

    this.executionScores = new Map();
  }

  isComplexType(id: string): boolean {
    return this.typeIsComplexType.has(id);
  }

  getComplexType(id: string): ComplexType {
    return this.typeIsComplexType.get(id);
  }

  isTypeProbability(id: string): boolean {
    return this.typeIsTypeProbability.has(id);
  }

  getTypeProbability(id: string): TypeProbability {
    return this.typeIsTypeProbability.get(id);
  }

  /**
   * Add a (new) identifierDescription to the probability map
   * @param type the (new) identifierDescription
   * @param score the score of identifierDescription (higher score means higher probability)
   */
  addType(type: string | TypeProbability | ComplexType, score: number) {
    if (score <= 0) {
      throw new Error("Type must be compatible");
    }

    if (type instanceof TypeProbability) {
      const id = type.getIdentifier();

      this.typeIsTypeProbability.set(id, type);

      type = id;
    } else if (isComplexType(type)) {
      this.typeIsComplexType.set(type.id, type);

      type = type.id;
    }

    if (!this.scores.has(type)) {
      this.scores.set(type, 0);
    }

    this.scores.set(type, this.scores.get(type) + score);

    this.totalScores += score;
    this.scoresChanged = true;
  }

  /**
   * Calculates the actual probabilities for each identifierDescription based on the given scores
   */
  calculateProbabilities(incorporateExecutionInformation: boolean) {
    if (!this.scoresChanged) {
      return;
    }

    if (this.scores.size === 0) {
      this.probabilities.set(TypeEnum.ANY, 1);
      return;
    }

    const total = this.totalScores;
    this.probabilities = new Map();

    const preliminaryProbabilities = new Map();

    // recalculate probabilityMap
    for (const identifier of this.scores.keys()) {
      preliminaryProbabilities.set(
        identifier,
        this.scores.get(identifier) / total
      );
    }
    this.scoresChanged = false;

    // return

    for (const identifier of this.scores.keys()) {
      if (this.typeIsTypeProbability.has(identifier)) {
        this.typeIsTypeProbability
          .get(identifier)
          .calculateProbabilities(incorporateExecutionInformation);
        const probs = this.typeIsTypeProbability.get(identifier).probabilities;

        let divider = 1;
        if (probs.has(this.id)) {
          divider = 1 - probs.get(this.id);
        }

        for (const key of probs.keys()) {
          if (this.id === key) {
            continue;
          }
          if (!this.probabilities.has(key)) {
            this.probabilities.set(key, 0);
          }

          this.probabilities.set(
            key,
            this.probabilities.get(key) +
              preliminaryProbabilities.get(identifier) *
                (probs.get(key) / divider)
          );
        }
      } else {
        if (!this.probabilities.has(identifier)) {
          this.probabilities.set(identifier, 0);
        }

        this.probabilities.set(
          identifier,
          this.probabilities.get(identifier) +
            preliminaryProbabilities.get(identifier)
        );
      }
    }

    // incorporate execution scores
    // get min value
    let minValue = 0;
    for (const key of this.executionScores.keys()) {
      minValue = Math.min(minValue, this.executionScores.get(key));
    }

    if (incorporateExecutionInformation && this.executionScores.size > 0) {
      // calculate total
      let totalScore = 0;
      for (const key of this.probabilities.keys()) {
        let value = this.executionScores.has(key)
          ? this.executionScores.get(key)
          : 0;
        value += -minValue;
        totalScore += value;
      }

      if (totalScore) {
        // calculate probability and incorporate
        for (const key of this.probabilities.keys()) {
          let value = this.executionScores.has(key)
            ? this.executionScores.get(key)
            : 0;
          value += -minValue;

          const probability = value / totalScore;

          this.probabilities.set(
            key,
            this.probabilities.get(key) * probability
          );
        }
      }
    }

    // normalize to one
    let totalProb = 0;
    for (const key of this.probabilities.keys()) {
      totalProb += this.probabilities.get(key);
    }

    if (totalProb) {
      for (const key of this.probabilities.keys()) {
        this.probabilities.set(key, this.probabilities.get(key) / totalProb);
      }
    }
  }

  addExecutionScore(type: string, score: number) {
    if (!this.executionScores.has(type)) {
      this.executionScores.set(type, score);
    }

    this.scoresChanged = true;
    this.executionScores.set(type, this.executionScores.get(type) + score);
  }

  /**
   * Gets a random identifierDescription from the probability map based on their likelyhood
   */
  getRandomType(incorporateExecutionInformation: boolean): string {
    this.calculateProbabilities(incorporateExecutionInformation);

    if (this.probabilities.size === 0) {
      return TypeEnum.ANY;
    }

    const choice = prng.nextDouble(0, 1);
    let index = 0;

    for (const type of this.probabilities.keys()) {
      const probability = this.probabilities.get(type);

      if (choice <= index + probability) {
        if (this.typeIsTypeProbability.has(type)) {
          return this.typeIsTypeProbability
            .get(type)
            .getRandomType(incorporateExecutionInformation);
        }
        return type;
      }

      index += probability;
    }

    const type = this.probabilities.keys().next().value;

    if (this.typeIsTypeProbability.has(type)) {
      return this.typeIsTypeProbability
        .get(type)
        .getRandomType(incorporateExecutionInformation);
    }

    return type;
  }

  getHighestProbabilityType(incorporateExecutionInformation: boolean): string {
    this.calculateProbabilities(incorporateExecutionInformation);

    if (this.probabilities.size === 0) {
      return TypeEnum.ANY;
    }

    let best: string = this.probabilities.keys().next().value;

    for (const object of this.probabilities.keys()) {
      if (this.probabilities.get(object) > this.probabilities.get(best)) {
        best = object;
      }
    }

    if (this.typeIsTypeProbability.has(best)) {
      return this.typeIsTypeProbability
        .get(best)
        .getHighestProbabilityType(incorporateExecutionInformation);
    }

    return best;
  }

  keys = () => this.scores.keys();

  getIdentifier(): string {
    return this.id;
  }
}
