var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class2, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _dec17, _dec18, _dec19, _dec20, _class3, _descriptor0, _descriptor1, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class4, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export let eventDto = (_dec = IsString(), _dec2 = IsNotEmpty(), _dec3 = IsString(), _dec4 = IsNotEmpty(), _dec5 = IsBoolean(), _dec6 = IsNotEmpty(), _class = class eventDto {
  constructor() {
    _initializerDefineProperty(this, "message", _descriptor, this);
    _initializerDefineProperty(this, "type", _descriptor2, this);
    _initializerDefineProperty(this, "remember", _descriptor3, this);
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "message", [_dec, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "remember", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class);
export let createEventDto = (_dec7 = IsString(), _dec8 = IsNotEmpty(), _dec9 = IsString(), _dec0 = IsNotEmpty(), _dec1 = IsString(), _dec10 = IsNotEmpty(), _dec11 = IsString(), _dec12 = IsNotEmpty(), _dec13 = IsString(), _dec14 = IsNotEmpty(), _dec15 = IsBoolean(), _dec16 = IsNotEmpty(), _class2 = class createEventDto {
  constructor() {
    _initializerDefineProperty(this, "title", _descriptor4, this);
    _initializerDefineProperty(this, "description", _descriptor5, this);
    _initializerDefineProperty(this, "participants", _descriptor6, this);
    _initializerDefineProperty(this, "date", _descriptor7, this);
    _initializerDefineProperty(this, "type", _descriptor8, this);
    _initializerDefineProperty(this, "remember", _descriptor9, this);
  }
}, _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec9, _dec0], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "participants", [_dec1, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "date", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "remember", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class2);
export class updateEventDto {
  constructor() {
    this.title = void 0;
    this.description = void 0;
    this.date = void 0;
  }
}
export let listEventsDto = (_dec17 = IsNumber(), _dec18 = IsNotEmpty(), _dec19 = IsNumber(), _dec20 = IsNotEmpty(), _class3 = class listEventsDto {
  constructor() {
    _initializerDefineProperty(this, "offset", _descriptor0, this);
    _initializerDefineProperty(this, "limit", _descriptor1, this);
  }
}, _descriptor0 = _applyDecoratedDescriptor(_class3.prototype, "offset", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor1 = _applyDecoratedDescriptor(_class3.prototype, "limit", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class3);
export let eventResponseDto = (_dec21 = IsString(), _dec22 = IsNotEmpty(), _dec23 = IsString(), _dec24 = IsNotEmpty(), _dec25 = IsString(), _dec26 = IsNotEmpty(), _dec27 = IsString(), _dec28 = IsNotEmpty(), _dec29 = IsString(), _dec30 = IsNotEmpty(), _dec31 = IsBoolean(), _dec32 = IsNotEmpty(), _class4 = class eventResponseDto {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor10, this);
    _initializerDefineProperty(this, "title", _descriptor11, this);
    _initializerDefineProperty(this, "description", _descriptor12, this);
    _initializerDefineProperty(this, "date", _descriptor13, this);
    _initializerDefineProperty(this, "type", _descriptor14, this);
    _initializerDefineProperty(this, "remember", _descriptor15, this);
  }
}, _descriptor10 = _applyDecoratedDescriptor(_class4.prototype, "id", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class4.prototype, "title", [_dec23, _dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class4.prototype, "description", [_dec25, _dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class4.prototype, "date", [_dec27, _dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class4.prototype, "type", [_dec29, _dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class4.prototype, "remember", [_dec31, _dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class4);