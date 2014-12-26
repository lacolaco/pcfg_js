/**
 * Created by laco on 14/12/26.
 */
import Rule = require("rule");

module RuleTree {

  interface Coordinate {
    x: number;
    y: number;
  }

  interface RuleCoordinateMap {
    [rule: string]: Coordinate;
  }

  interface PosRuleListMap {
    [pos: string]: Rule[];
  }

  export class Node {

    private _left:RuleCoordinateMap;

    get left():RuleCoordinateMap {
      if (this._left == null) {
        this._left = {};
      }
      return this._left;
    }

    set left(value:RuleCoordinateMap) {
      this._left = value;
    }

    private _right:RuleCoordinateMap;

    get right():RuleCoordinateMap {
      if (this._right == null) {
        this._right = {};
      }
      return this._right;
    }

    set right(value:RuleCoordinateMap) {
      this._right = value;
    }

    private _rules:PosRuleListMap;

    get rules():PosRuleListMap {
      if (this._rules == null) {
        this._rules = {};
      }
      return this._rules;
    }

    set rules(value:PosRuleListMap) {
      this._rules = value;
    }
  }
}

export = RuleTree;
