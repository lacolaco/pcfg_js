/**
 * Created by laco on 14/12/26.
 */

class Rule {
  source:string;
  result1:string;
  result2:string;
  probability:number;

  static fromString(expression:string):Rule {
    var pattern = /(.+)\s*>\s*(.+)\s+(.+)\s+(.+)/;
    var result = pattern.exec(expression);
    if (result) {
      var rule = new Rule();
      rule.source = result[1];
      rule.result1 = result[2];
      rule.result2 = result[3];
      rule.probability = parseFloat(result[4]);
      return rule;
    }
    else return null;
  }

  static endRule(pos:string):Rule {
    return <Rule>{
      source: pos,
      result1: "END",
      result2: "END",
      probability: 1
    };
  }

  toString() {
    return this.source + ">" + this.result1 + " " + this.result2;
  }
}

export = Rule;
