/**
 * Created by laco on 14/12/26.
 */

interface PosMap {
  [pos: string]: number;
}

class PcfgNode {

  private _inside:PosMap;

  get inside():PosMap {
    if (this._inside == null) {
      this._inside = {};
    }
    return this._inside;
  }

  set inside(value:PosMap) {
    this._inside = value;
  }

  private _outside:PosMap;

  get outside():PosMap {
    if (this._outside == null) {
      this._outside = {};
    }
    return this._outside;
  }

  set outside(value:PosMap) {
    this._outside = value;
  }
}

export = PcfgNode
