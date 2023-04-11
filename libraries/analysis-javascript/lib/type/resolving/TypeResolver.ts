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

import { Element } from "../discovery/element/Element";
import { Relation } from "../discovery/relation/Relation";

import { TypeProbability } from "./TypeProbability";

/**
 * Abstract TypeResolver class
 *
 * @author Dimitri Stallenberg
 */
export abstract class TypeResolver {
  /**
   * Resolves the types of all given elements and relations
   * @param elementMap the elements to resolve the types of
   * @param relationMap the relations to resolve the types of
   */
  abstract resolveTypes(
    elementMap: Map<string, Element>,
    relationMap: Map<string, Relation>
  ): void;

  /**
   * Returns the identifierDescription of the variable in the given scope
   * @param id the id of the variable
   */
  abstract getTyping(id: string): TypeProbability;
  abstract getElement(id: string): Element;
  abstract getRelation(id: string): Relation;
}
