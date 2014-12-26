import kuromoji = require("kuromoji");
import Token = kuromoji.Token;
import Pcfg = require("./pcfg");
import Rule = require("./rule");
import RuleTree = require("./rule_tree_node");

var rules:Rule[] = [
  "S>名詞句 形容詞 0.5",
  "S>名詞句 名詞 0.3",
  "S>名詞句 動詞 0.2",
  "名詞>形容詞 名詞 1",
  "名詞句>名詞 助詞 1",
  "形容詞>名詞 助詞 0.1",
  "形容詞>名詞 動詞 0.2",
  "形容詞>副詞 形容詞 0.4",
  "形容詞>副詞 形容詞 0.3",
  "動詞>副詞 動詞句 0.5",
  "動詞>名詞 助動詞 0.5"
].map((expr)=>Rule.fromString(expr));

var text = "隣の客はよく柿食う客だ";
console.log("text=" + text);
rules.forEach((v)=>console.log(v.toString(), v.probability));
Pcfg.parse(text, rules, (nodeTree, tokens, newRules)=> {
  console.log("### result ###");
  if (!nodeTree) {
    console.log("Cannot parse");
  }
  else {
    var N = nodeTree.length;
    display(nodeTree, tokens, 0, N - 1, "S");
    newRules.forEach((v)=>console.log(v.toString(), v.probability));
  }
});

function display(tree:RuleTree.Node[][], tokens:Token[], x:number, y:number, pos:string, depth = 0, leafCount = 0) {
  var top = tree[x][y];
  if (top === undefined) return leafCount;
  var result = "";
  var rule:Rule = top.rules[pos].sort((a, b)=> a.probability < b.probability ? -1 : 1)[0];
  if (rule.result1 == "END") {
    result = "--->" + tokens[leafCount].surface_form;
    leafCount++;
  }
  else {
    result = "(" + rule.probability.toString() + ")";
  }

  console.log(new Array(depth * 4).join(" "), rule.source, result);
  if (rule.result1 !== "END") {
    leafCount = display(tree, tokens, top.left[rule.toString()].x, top.left[rule.toString()].y, rule.result1, depth + 1, leafCount);
  }
  if (rule.result2 !== "END") {
    leafCount = display(tree, tokens, top.right[rule.toString()].x, top.right[rule.toString()].y, rule.result2, depth + 1, leafCount);
  }
  return leafCount;
}
