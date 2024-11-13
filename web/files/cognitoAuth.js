var Cognito;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/constants.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/constants.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_DATA_SHA_256: () => (/* binding */ EMPTY_DATA_SHA_256),
/* harmony export */   SHA_256_HASH: () => (/* binding */ SHA_256_HASH),
/* harmony export */   SHA_256_HMAC_ALGO: () => (/* binding */ SHA_256_HMAC_ALGO)
/* harmony export */ });
var SHA_256_HASH = { name: "SHA-256" };
var SHA_256_HMAC_ALGO = {
    name: "HMAC",
    hash: SHA_256_HASH
};
var EMPTY_DATA_SHA_256 = new Uint8Array([
    227,
    176,
    196,
    66,
    152,
    252,
    28,
    20,
    154,
    251,
    244,
    200,
    153,
    111,
    185,
    36,
    39,
    174,
    65,
    228,
    100,
    155,
    147,
    76,
    164,
    149,
    153,
    27,
    120,
    82,
    184,
    85
]);
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js":
/*!***************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sha256: () => (/* binding */ Sha256)
/* harmony export */ });
/* harmony import */ var _webCryptoSha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webCryptoSha256 */ "../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js");
/* harmony import */ var _aws_crypto_sha256_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-crypto/sha256-js */ "../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/index.js");
/* harmony import */ var _aws_crypto_supports_web_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-crypto/supports-web-crypto */ "../nodejs/files/node_modules/@aws-crypto/supports-web-crypto/build/module/index.js");
/* harmony import */ var _aws_sdk_util_locate_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/util-locate-window */ "../nodejs/files/node_modules/@aws-sdk/util-locate-window/dist-es/index.js");
/* harmony import */ var _aws_crypto_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-crypto/util */ "../nodejs/files/node_modules/@aws-crypto/util/build/module/index.js");





var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        if ((0,_aws_crypto_supports_web_crypto__WEBPACK_IMPORTED_MODULE_2__.supportsWebCrypto)((0,_aws_sdk_util_locate_window__WEBPACK_IMPORTED_MODULE_3__.locateWindow)())) {
            this.hash = new _webCryptoSha256__WEBPACK_IMPORTED_MODULE_0__.Sha256(secret);
        }
        else {
            this.hash = new _aws_crypto_sha256_js__WEBPACK_IMPORTED_MODULE_1__.Sha256(secret);
        }
    }
    Sha256.prototype.update = function (data, encoding) {
        this.hash.update((0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_4__.convertToBuffer)(data));
    };
    Sha256.prototype.digest = function () {
        return this.hash.digest();
    };
    Sha256.prototype.reset = function () {
        this.hash.reset();
    };
    return Sha256;
}());

//# sourceMappingURL=crossPlatformSha256.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/index.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sha256: () => (/* reexport safe */ _crossPlatformSha256__WEBPACK_IMPORTED_MODULE_0__.Sha256),
/* harmony export */   WebCryptoSha256: () => (/* reexport safe */ _webCryptoSha256__WEBPACK_IMPORTED_MODULE_1__.Sha256)
/* harmony export */ });
/* harmony import */ var _crossPlatformSha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crossPlatformSha256 */ "../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js");
/* harmony import */ var _webCryptoSha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webCryptoSha256 */ "../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js":
/*!***********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sha256: () => (/* binding */ Sha256)
/* harmony export */ });
/* harmony import */ var _aws_crypto_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/util */ "../nodejs/files/node_modules/@aws-crypto/util/build/module/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/constants.js");
/* harmony import */ var _aws_sdk_util_locate_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-locate-window */ "../nodejs/files/node_modules/@aws-sdk/util-locate-window/dist-es/index.js");



var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        this.toHash = new Uint8Array(0);
        this.secret = secret;
        this.reset();
    }
    Sha256.prototype.update = function (data) {
        if ((0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_0__.isEmptyData)(data)) {
            return;
        }
        var update = (0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_0__.convertToBuffer)(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
    };
    Sha256.prototype.digest = function () {
        var _this = this;
        if (this.key) {
            return this.key.then(function (key) {
                return (0,_aws_sdk_util_locate_window__WEBPACK_IMPORTED_MODULE_2__.locateWindow)()
                    .crypto.subtle.sign(_constants__WEBPACK_IMPORTED_MODULE_1__.SHA_256_HMAC_ALGO, key, _this.toHash)
                    .then(function (data) { return new Uint8Array(data); });
            });
        }
        if ((0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_0__.isEmptyData)(this.toHash)) {
            return Promise.resolve(_constants__WEBPACK_IMPORTED_MODULE_1__.EMPTY_DATA_SHA_256);
        }
        return Promise.resolve()
            .then(function () {
            return (0,_aws_sdk_util_locate_window__WEBPACK_IMPORTED_MODULE_2__.locateWindow)().crypto.subtle.digest(_constants__WEBPACK_IMPORTED_MODULE_1__.SHA_256_HASH, _this.toHash);
        })
            .then(function (data) { return Promise.resolve(new Uint8Array(data)); });
    };
    Sha256.prototype.reset = function () {
        var _this = this;
        this.toHash = new Uint8Array(0);
        if (this.secret && this.secret !== void 0) {
            this.key = new Promise(function (resolve, reject) {
                (0,_aws_sdk_util_locate_window__WEBPACK_IMPORTED_MODULE_2__.locateWindow)()
                    .crypto.subtle.importKey("raw", (0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_0__.convertToBuffer)(_this.secret), _constants__WEBPACK_IMPORTED_MODULE_1__.SHA_256_HMAC_ALGO, false, ["sign"])
                    .then(resolve, reject);
            });
            this.key.catch(function () { });
        }
    };
    return Sha256;
}());

//# sourceMappingURL=webCryptoSha256.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawSha256: () => (/* binding */ RawSha256)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/constants.js");

/**
 * @internal
 */
var RawSha256 = /** @class */ (function () {
    function RawSha256() {
        this.state = Int32Array.from(_constants__WEBPACK_IMPORTED_MODULE_0__.INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        /**
         * @internal
         */
        this.finished = false;
    }
    RawSha256.prototype.update = function (data) {
        if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_HASHABLE_LENGTH) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE) {
                this.hashBuffer();
                this.bufferLength = 0;
            }
        }
    };
    RawSha256.prototype.digest = function () {
        if (!this.finished) {
            var bitsHashed = this.bytesHashed * 8;
            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            var undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 0x80);
            // Ensure the final block has enough room for the hashed length
            if (undecoratedLength % _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE >= _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE - 8) {
                for (var i = this.bufferLength; i < _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE; i++) {
                    bufferView.setUint8(i, 0);
                }
                this.hashBuffer();
                this.bufferLength = 0;
            }
            for (var i = this.bufferLength; i < _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE - 8; i++) {
                bufferView.setUint8(i, 0);
            }
            bufferView.setUint32(_constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE - 8, Math.floor(bitsHashed / 0x100000000), true);
            bufferView.setUint32(_constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
        }
        // The value in state is little-endian rather than big-endian, so flip
        // each word into a new Uint8Array
        var out = new Uint8Array(_constants__WEBPACK_IMPORTED_MODULE_0__.DIGEST_LENGTH);
        for (var i = 0; i < 8; i++) {
            out[i * 4] = (this.state[i] >>> 24) & 0xff;
            out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
            out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
            out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
        }
        return out;
    };
    RawSha256.prototype.hashBuffer = function () {
        var _a = this, buffer = _a.buffer, state = _a.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE; i++) {
            if (i < 16) {
                this.temp[i] =
                    ((buffer[i * 4] & 0xff) << 24) |
                        ((buffer[i * 4 + 1] & 0xff) << 16) |
                        ((buffer[i * 4 + 2] & 0xff) << 8) |
                        (buffer[i * 4 + 3] & 0xff);
            }
            else {
                var u = this.temp[i - 2];
                var t1_1 = ((u >>> 17) | (u << 15)) ^ ((u >>> 19) | (u << 13)) ^ (u >>> 10);
                u = this.temp[i - 15];
                var t2_1 = ((u >>> 7) | (u << 25)) ^ ((u >>> 18) | (u << 14)) ^ (u >>> 3);
                this.temp[i] =
                    ((t1_1 + this.temp[i - 7]) | 0) + ((t2_1 + this.temp[i - 16]) | 0);
            }
            var t1 = ((((((state4 >>> 6) | (state4 << 26)) ^
                ((state4 >>> 11) | (state4 << 21)) ^
                ((state4 >>> 25) | (state4 << 7))) +
                ((state4 & state5) ^ (~state4 & state6))) |
                0) +
                ((state7 + ((_constants__WEBPACK_IMPORTED_MODULE_0__.KEY[i] + this.temp[i]) | 0)) | 0)) |
                0;
            var t2 = ((((state0 >>> 2) | (state0 << 30)) ^
                ((state0 >>> 13) | (state0 << 19)) ^
                ((state0 >>> 22) | (state0 << 10))) +
                ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) |
                0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = (state3 + t1) | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = (t1 + t2) | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
    };
    return RawSha256;
}());

//# sourceMappingURL=RawSha256.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/constants.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/constants.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_SIZE: () => (/* binding */ BLOCK_SIZE),
/* harmony export */   DIGEST_LENGTH: () => (/* binding */ DIGEST_LENGTH),
/* harmony export */   INIT: () => (/* binding */ INIT),
/* harmony export */   KEY: () => (/* binding */ KEY),
/* harmony export */   MAX_HASHABLE_LENGTH: () => (/* binding */ MAX_HASHABLE_LENGTH)
/* harmony export */ });
/**
 * @internal
 */
var BLOCK_SIZE = 64;
/**
 * @internal
 */
var DIGEST_LENGTH = 32;
/**
 * @internal
 */
var KEY = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/**
 * @internal
 */
var INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
];
/**
 * @internal
 */
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/index.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sha256: () => (/* reexport safe */ _jsSha256__WEBPACK_IMPORTED_MODULE_0__.Sha256)
/* harmony export */ });
/* harmony import */ var _jsSha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsSha256 */ "../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js":
/*!***********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sha256: () => (/* binding */ Sha256)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../nodejs/files/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/constants.js");
/* harmony import */ var _RawSha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawSha256 */ "../nodejs/files/node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js");
/* harmony import */ var _aws_crypto_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-crypto/util */ "../nodejs/files/node_modules/@aws-crypto/util/build/module/index.js");




var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        this.secret = secret;
        this.hash = new _RawSha256__WEBPACK_IMPORTED_MODULE_1__.RawSha256();
        this.reset();
    }
    Sha256.prototype.update = function (toHash) {
        if ((0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_2__.isEmptyData)(toHash) || this.error) {
            return;
        }
        try {
            this.hash.update((0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_2__.convertToBuffer)(toHash));
        }
        catch (e) {
            this.error = e;
        }
    };
    /* This synchronous method keeps compatibility
     * with the v2 aws-sdk.
     */
    Sha256.prototype.digestSync = function () {
        if (this.error) {
            throw this.error;
        }
        if (this.outer) {
            if (!this.outer.finished) {
                this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
        }
        return this.hash.digest();
    };
    /* The underlying digest method here is synchronous.
     * To keep the same interface with the other hash functions
     * the default is to expose this as an async method.
     * However, it can sometimes be useful to have a sync method.
     */
    Sha256.prototype.digest = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                return [2 /*return*/, this.digestSync()];
            });
        });
    };
    Sha256.prototype.reset = function () {
        this.hash = new _RawSha256__WEBPACK_IMPORTED_MODULE_1__.RawSha256();
        if (this.secret) {
            this.outer = new _RawSha256__WEBPACK_IMPORTED_MODULE_1__.RawSha256();
            var inner = bufferFromSecret(this.secret);
            var outer = new Uint8Array(_constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE);
            outer.set(inner);
            for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE; i++) {
                inner[i] ^= 0x36;
                outer[i] ^= 0x5c;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            // overwrite the copied key in memory
            for (var i = 0; i < inner.byteLength; i++) {
                inner[i] = 0;
            }
        }
    };
    return Sha256;
}());

function bufferFromSecret(secret) {
    var input = (0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_2__.convertToBuffer)(secret);
    if (input.byteLength > _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE) {
        var bufferHash = new _RawSha256__WEBPACK_IMPORTED_MODULE_1__.RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
    }
    var buffer = new Uint8Array(_constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE);
    buffer.set(input);
    return buffer;
}
//# sourceMappingURL=jsSha256.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/supports-web-crypto/build/module/index.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/supports-web-crypto/build/module/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsSecureRandom: () => (/* reexport safe */ _supportsWebCrypto__WEBPACK_IMPORTED_MODULE_0__.supportsSecureRandom),
/* harmony export */   supportsSubtleCrypto: () => (/* reexport safe */ _supportsWebCrypto__WEBPACK_IMPORTED_MODULE_0__.supportsSubtleCrypto),
/* harmony export */   supportsWebCrypto: () => (/* reexport safe */ _supportsWebCrypto__WEBPACK_IMPORTED_MODULE_0__.supportsWebCrypto),
/* harmony export */   supportsZeroByteGCM: () => (/* reexport safe */ _supportsWebCrypto__WEBPACK_IMPORTED_MODULE_0__.supportsZeroByteGCM)
/* harmony export */ });
/* harmony import */ var _supportsWebCrypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supportsWebCrypto */ "../nodejs/files/node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js":
/*!******************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsSecureRandom: () => (/* binding */ supportsSecureRandom),
/* harmony export */   supportsSubtleCrypto: () => (/* binding */ supportsSubtleCrypto),
/* harmony export */   supportsWebCrypto: () => (/* binding */ supportsWebCrypto),
/* harmony export */   supportsZeroByteGCM: () => (/* binding */ supportsZeroByteGCM)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../nodejs/files/node_modules/tslib/tslib.es6.mjs");

var subtleCryptoMethods = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
];
function supportsWebCrypto(window) {
    if (supportsSecureRandom(window) &&
        typeof window.crypto.subtle === "object") {
        var subtle = window.crypto.subtle;
        return supportsSubtleCrypto(subtle);
    }
    return false;
}
function supportsSecureRandom(window) {
    if (typeof window === "object" && typeof window.crypto === "object") {
        var getRandomValues = window.crypto.getRandomValues;
        return typeof getRandomValues === "function";
    }
    return false;
}
function supportsSubtleCrypto(subtle) {
    return (subtle &&
        subtleCryptoMethods.every(function (methodName) { return typeof subtle[methodName] === "function"; }));
}
function supportsZeroByteGCM(subtle) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var key, zeroByteAuthTag, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!supportsSubtleCrypto(subtle))
                        return [2 /*return*/, false];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, subtle.generateKey({ name: "AES-GCM", length: 128 }, false, ["encrypt"])];
                case 2:
                    key = _b.sent();
                    return [4 /*yield*/, subtle.encrypt({
                            name: "AES-GCM",
                            iv: new Uint8Array(Array(12)),
                            additionalData: new Uint8Array(Array(16)),
                            tagLength: 128
                        }, key, new Uint8Array(0))];
                case 3:
                    zeroByteAuthTag = _b.sent();
                    return [2 /*return*/, zeroByteAuthTag.byteLength === 16];
                case 4:
                    _a = _b.sent();
                    return [2 /*return*/, false];
                case 5: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=supportsWebCrypto.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/util/build/module/convertToBuffer.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/util/build/module/convertToBuffer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToBuffer: () => (/* binding */ convertToBuffer)
/* harmony export */ });
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-utf8 */ "../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/index.js");
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from
    ? function (input) { return Buffer.from(input, "utf8"); }
    : _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array)
        return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
//# sourceMappingURL=convertToBuffer.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/util/build/module/index.js":
/*!***************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/util/build/module/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToBuffer: () => (/* reexport safe */ _convertToBuffer__WEBPACK_IMPORTED_MODULE_0__.convertToBuffer),
/* harmony export */   isEmptyData: () => (/* reexport safe */ _isEmptyData__WEBPACK_IMPORTED_MODULE_1__.isEmptyData),
/* harmony export */   numToUint8: () => (/* reexport safe */ _numToUint8__WEBPACK_IMPORTED_MODULE_2__.numToUint8),
/* harmony export */   uint32ArrayFrom: () => (/* reexport safe */ _uint32ArrayFrom__WEBPACK_IMPORTED_MODULE_3__.uint32ArrayFrom)
/* harmony export */ });
/* harmony import */ var _convertToBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertToBuffer */ "../nodejs/files/node_modules/@aws-crypto/util/build/module/convertToBuffer.js");
/* harmony import */ var _isEmptyData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isEmptyData */ "../nodejs/files/node_modules/@aws-crypto/util/build/module/isEmptyData.js");
/* harmony import */ var _numToUint8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numToUint8 */ "../nodejs/files/node_modules/@aws-crypto/util/build/module/numToUint8.js");
/* harmony import */ var _uint32ArrayFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uint32ArrayFrom */ "../nodejs/files/node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js");
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/util/build/module/isEmptyData.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/util/build/module/isEmptyData.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmptyData: () => (/* binding */ isEmptyData)
/* harmony export */ });
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
//# sourceMappingURL=isEmptyData.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/util/build/module/numToUint8.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/util/build/module/numToUint8.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numToUint8: () => (/* binding */ numToUint8)
/* harmony export */ });
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff,
    ]);
}
//# sourceMappingURL=numToUint8.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uint32ArrayFrom: () => (/* binding */ uint32ArrayFrom)
/* harmony export */ });
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
//# sourceMappingURL=uint32ArrayFrom.js.map

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js":
/*!****************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)
/* harmony export */ });
const fromUtf8 = (input) => new TextEncoder().encode(input);


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/index.js":
/*!*****************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ "../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js");
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toUint8Array */ "../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js");
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUtf8 */ "../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js":
/*!************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ "../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js");

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return (0,_fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js":
/*!**************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
const toUtf8 = (input) => {
    if (typeof input === "string") {
        return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return new TextDecoder("utf-8").decode(input);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/CognitoIdentityProviderClient.js":
/*!***********************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/CognitoIdentityProviderClient.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CognitoIdentityProviderClient: () => (/* binding */ CognitoIdentityProviderClient),
/* harmony export */   __Client: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-host-header */ "../nodejs/files/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-logger */ "../nodejs/files/node_modules/@aws-sdk/middleware-logger/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/middleware-recursion-detection */ "../nodejs/files/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-user-agent */ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js");
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smithy/config-resolver */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/index.js");
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smithy/core */ "../nodejs/files/node_modules/@smithy/core/dist-es/index.js");
/* harmony import */ var _smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smithy/middleware-content-length */ "../nodejs/files/node_modules/@smithy/middleware-content-length/dist-es/index.js");
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smithy/middleware-endpoint */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smithy/middleware-retry */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/httpAuthSchemeProvider */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/auth/httpAuthSchemeProvider.js");
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./endpoint/EndpointParameters */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/EndpointParameters.js");
/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runtimeConfig */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeConfig.browser.js");
/* harmony import */ var _runtimeExtensions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./runtimeExtensions */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeExtensions.js");















class CognitoIdentityProviderClient extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client {
    constructor(...[configuration]) {
        const _config_0 = (0,_runtimeConfig__WEBPACK_IMPORTED_MODULE_10__.getRuntimeConfig)(configuration || {});
        const _config_1 = (0,_endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__.resolveUserAgentConfig)(_config_1);
        const _config_3 = (0,_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_8__.resolveRetryConfig)(_config_2);
        const _config_4 = (0,_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_4__.resolveRegionConfig)(_config_3);
        const _config_5 = (0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0,_smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_7__.resolveEndpointConfig)(_config_5);
        const _config_7 = (0,_auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_12__.resolveHttpAuthSchemeConfig)(_config_6);
        const _config_8 = (0,_runtimeExtensions__WEBPACK_IMPORTED_MODULE_13__.resolveRuntimeExtensions)(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_3__.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0,_smithy_middleware_retry__WEBPACK_IMPORTED_MODULE_8__.getRetryPlugin)(this.config));
        this.middlewareStack.use((0,_smithy_middleware_content_length__WEBPACK_IMPORTED_MODULE_6__.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_0__.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_2__.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0,_smithy_core__WEBPACK_IMPORTED_MODULE_5__.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
            httpAuthSchemeParametersProvider: _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_12__.defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (config) => new _smithy_core__WEBPACK_IMPORTED_MODULE_5__.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": config.credentials,
            }),
        }));
        this.middlewareStack.use((0,_smithy_core__WEBPACK_IMPORTED_MODULE_5__.getHttpSigningPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/auth/httpAuthExtensionConfiguration.js":
/*!*****************************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/auth/httpAuthExtensionConfiguration.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpAuthExtensionConfiguration: () => (/* binding */ getHttpAuthExtensionConfiguration),
/* harmony export */   resolveHttpAuthRuntimeConfig: () => (/* binding */ resolveHttpAuthRuntimeConfig)
/* harmony export */ });
const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/auth/httpAuthSchemeProvider.js":
/*!*********************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/auth/httpAuthSchemeProvider.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider: () => (/* binding */ defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider),
/* harmony export */   defaultCognitoIdentityProviderHttpAuthSchemeProvider: () => (/* binding */ defaultCognitoIdentityProviderHttpAuthSchemeProvider),
/* harmony export */   resolveHttpAuthSchemeConfig: () => (/* binding */ resolveHttpAuthSchemeConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/core */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js");
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js");


const defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext)(context).operation,
        region: (await (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "cognito-idp",
            region: authParameters.region,
        },
        propertiesExtractor: (config, context) => ({
            signingProperties: {
                config,
                context,
            },
        }),
    };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#noAuth",
    };
}
const defaultCognitoIdentityProviderHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "AssociateSoftwareToken": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ChangePassword": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ConfirmDevice": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ConfirmForgotPassword": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ConfirmSignUp": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "DeleteUser": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "DeleteUserAttributes": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ForgetDevice": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ForgotPassword": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "GetDevice": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "GetUser": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "GetUserAttributeVerificationCode": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "GlobalSignOut": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "InitiateAuth": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ListDevices": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ResendConfirmationCode": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "RespondToAuthChallenge": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "RevokeToken": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "SetUserMFAPreference": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "SetUserSettings": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "SignUp": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "UpdateAuthEventFeedback": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "UpdateDeviceStatus": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "UpdateUserAttributes": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "VerifySoftwareToken": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "VerifyUserAttribute": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_1__.resolveAwsSdkSigV4Config)(config);
    return {
        ...config_0,
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/commands/InitiateAuthCommand.js":
/*!**********************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/commands/InitiateAuthCommand.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Command: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   InitiateAuthCommand: () => (/* binding */ InitiateAuthCommand)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-endpoint */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/middleware-serde */ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoint/EndpointParameters */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/EndpointParameters.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models_0 */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/models_0.js");
/* harmony import */ var _protocols_Aws_json1_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../protocols/Aws_json1_1 */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/protocols/Aws_json1_1.js");







class InitiateAuthCommand extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command
    .classBuilder()
    .ep(_endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_3__.commonParams)
    .m(function (Command, cs, config, o) {
    return [
        (0,_smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0,_smithy_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "InitiateAuth", {})
    .n("CognitoIdentityProviderClient", "InitiateAuthCommand")
    .f(_models_models_0__WEBPACK_IMPORTED_MODULE_4__.InitiateAuthRequestFilterSensitiveLog, _models_models_0__WEBPACK_IMPORTED_MODULE_4__.InitiateAuthResponseFilterSensitiveLog)
    .ser(_protocols_Aws_json1_1__WEBPACK_IMPORTED_MODULE_5__.se_InitiateAuthCommand)
    .de(_protocols_Aws_json1_1__WEBPACK_IMPORTED_MODULE_5__.de_InitiateAuthCommand)
    .build() {
}


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/EndpointParameters.js":
/*!*********************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/EndpointParameters.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commonParams: () => (/* binding */ commonParams),
/* harmony export */   resolveClientEndpointParameters: () => (/* binding */ resolveClientEndpointParameters)
/* harmony export */ });
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "cognito-idp",
    };
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/endpointResolver.js":
/*!*******************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/endpointResolver.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEndpointResolver: () => (/* binding */ defaultEndpointResolver)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-endpoints */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/index.js");
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-endpoints */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/index.js");
/* harmony import */ var _ruleset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ruleset */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/ruleset.js");



const cache = new _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
});
const defaultEndpointResolver = (endpointParams, context = {}) => {
    return cache.get(endpointParams, () => (0,_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.resolveEndpoint)(_ruleset__WEBPACK_IMPORTED_MODULE_2__.ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    }));
};
_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.customEndpointFunctions.aws = _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.awsEndpointFunctions;


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/ruleset.js":
/*!**********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/ruleset.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ruleSet: () => (/* binding */ ruleSet)
/* harmony export */ });
const s = "required", t = "fn", u = "argv", v = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = { [s]: false, "type": "String" }, i = { [s]: true, "default": false, "type": "Boolean" }, j = { [v]: "Endpoint" }, k = { [t]: c, [u]: [{ [v]: "UseFIPS" }, true] }, l = { [t]: c, [u]: [{ [v]: "UseDualStack" }, true] }, m = {}, n = { [t]: "getAttr", [u]: [{ [v]: g }, "supportsFIPS"] }, o = { [t]: c, [u]: [true, { [t]: "getAttr", [u]: [{ [v]: g }, "supportsDualStack"] }] }, p = [k], q = [l], r = [{ [v]: "Region" }];
const _data = { version: "1.0", parameters: { Region: h, UseDualStack: i, UseFIPS: i, Endpoint: h }, rules: [{ conditions: [{ [t]: b, [u]: [j] }], rules: [{ conditions: p, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: q, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: j, properties: m, headers: m }, type: e }], type: f }, { conditions: [{ [t]: b, [u]: r }], rules: [{ conditions: [{ [t]: "aws.partition", [u]: r, assign: g }], rules: [{ conditions: [k, l], rules: [{ conditions: [{ [t]: c, [u]: [a, n] }, o], rules: [{ endpoint: { url: "https://cognito-idp-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: p, rules: [{ conditions: [{ [t]: c, [u]: [n, a] }], rules: [{ endpoint: { url: "https://cognito-idp-fips.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: q, rules: [{ conditions: [o], rules: [{ endpoint: { url: "https://cognito-idp.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://cognito-idp.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
const ruleSet = _data;


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/CognitoIdentityProviderServiceException.js":
/*!****************************************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/CognitoIdentityProviderServiceException.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CognitoIdentityProviderServiceException: () => (/* binding */ CognitoIdentityProviderServiceException),
/* harmony export */   __ServiceException: () => (/* reexport safe */ _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");


class CognitoIdentityProviderServiceException extends _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, CognitoIdentityProviderServiceException.prototype);
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/models_0.js":
/*!*********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/models_0.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountTakeoverEventActionType: () => (/* binding */ AccountTakeoverEventActionType),
/* harmony export */   AdminAddUserToGroupRequestFilterSensitiveLog: () => (/* binding */ AdminAddUserToGroupRequestFilterSensitiveLog),
/* harmony export */   AdminConfirmSignUpRequestFilterSensitiveLog: () => (/* binding */ AdminConfirmSignUpRequestFilterSensitiveLog),
/* harmony export */   AdminCreateUserRequestFilterSensitiveLog: () => (/* binding */ AdminCreateUserRequestFilterSensitiveLog),
/* harmony export */   AdminCreateUserResponseFilterSensitiveLog: () => (/* binding */ AdminCreateUserResponseFilterSensitiveLog),
/* harmony export */   AdminDeleteUserAttributesRequestFilterSensitiveLog: () => (/* binding */ AdminDeleteUserAttributesRequestFilterSensitiveLog),
/* harmony export */   AdminDeleteUserRequestFilterSensitiveLog: () => (/* binding */ AdminDeleteUserRequestFilterSensitiveLog),
/* harmony export */   AdminDisableUserRequestFilterSensitiveLog: () => (/* binding */ AdminDisableUserRequestFilterSensitiveLog),
/* harmony export */   AdminEnableUserRequestFilterSensitiveLog: () => (/* binding */ AdminEnableUserRequestFilterSensitiveLog),
/* harmony export */   AdminForgetDeviceRequestFilterSensitiveLog: () => (/* binding */ AdminForgetDeviceRequestFilterSensitiveLog),
/* harmony export */   AdminGetDeviceRequestFilterSensitiveLog: () => (/* binding */ AdminGetDeviceRequestFilterSensitiveLog),
/* harmony export */   AdminGetDeviceResponseFilterSensitiveLog: () => (/* binding */ AdminGetDeviceResponseFilterSensitiveLog),
/* harmony export */   AdminGetUserRequestFilterSensitiveLog: () => (/* binding */ AdminGetUserRequestFilterSensitiveLog),
/* harmony export */   AdminGetUserResponseFilterSensitiveLog: () => (/* binding */ AdminGetUserResponseFilterSensitiveLog),
/* harmony export */   AdminInitiateAuthRequestFilterSensitiveLog: () => (/* binding */ AdminInitiateAuthRequestFilterSensitiveLog),
/* harmony export */   AdminInitiateAuthResponseFilterSensitiveLog: () => (/* binding */ AdminInitiateAuthResponseFilterSensitiveLog),
/* harmony export */   AdminListDevicesRequestFilterSensitiveLog: () => (/* binding */ AdminListDevicesRequestFilterSensitiveLog),
/* harmony export */   AdminListDevicesResponseFilterSensitiveLog: () => (/* binding */ AdminListDevicesResponseFilterSensitiveLog),
/* harmony export */   AdminListGroupsForUserRequestFilterSensitiveLog: () => (/* binding */ AdminListGroupsForUserRequestFilterSensitiveLog),
/* harmony export */   AdminListUserAuthEventsRequestFilterSensitiveLog: () => (/* binding */ AdminListUserAuthEventsRequestFilterSensitiveLog),
/* harmony export */   AdminRemoveUserFromGroupRequestFilterSensitiveLog: () => (/* binding */ AdminRemoveUserFromGroupRequestFilterSensitiveLog),
/* harmony export */   AdminResetUserPasswordRequestFilterSensitiveLog: () => (/* binding */ AdminResetUserPasswordRequestFilterSensitiveLog),
/* harmony export */   AdminRespondToAuthChallengeRequestFilterSensitiveLog: () => (/* binding */ AdminRespondToAuthChallengeRequestFilterSensitiveLog),
/* harmony export */   AdminRespondToAuthChallengeResponseFilterSensitiveLog: () => (/* binding */ AdminRespondToAuthChallengeResponseFilterSensitiveLog),
/* harmony export */   AdminSetUserMFAPreferenceRequestFilterSensitiveLog: () => (/* binding */ AdminSetUserMFAPreferenceRequestFilterSensitiveLog),
/* harmony export */   AdminSetUserPasswordRequestFilterSensitiveLog: () => (/* binding */ AdminSetUserPasswordRequestFilterSensitiveLog),
/* harmony export */   AdminSetUserSettingsRequestFilterSensitiveLog: () => (/* binding */ AdminSetUserSettingsRequestFilterSensitiveLog),
/* harmony export */   AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog: () => (/* binding */ AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog),
/* harmony export */   AdminUpdateDeviceStatusRequestFilterSensitiveLog: () => (/* binding */ AdminUpdateDeviceStatusRequestFilterSensitiveLog),
/* harmony export */   AdminUpdateUserAttributesRequestFilterSensitiveLog: () => (/* binding */ AdminUpdateUserAttributesRequestFilterSensitiveLog),
/* harmony export */   AdminUserGlobalSignOutRequestFilterSensitiveLog: () => (/* binding */ AdminUserGlobalSignOutRequestFilterSensitiveLog),
/* harmony export */   AdvancedSecurityEnabledModeType: () => (/* binding */ AdvancedSecurityEnabledModeType),
/* harmony export */   AdvancedSecurityModeType: () => (/* binding */ AdvancedSecurityModeType),
/* harmony export */   AliasAttributeType: () => (/* binding */ AliasAttributeType),
/* harmony export */   AliasExistsException: () => (/* binding */ AliasExistsException),
/* harmony export */   AssociateSoftwareTokenRequestFilterSensitiveLog: () => (/* binding */ AssociateSoftwareTokenRequestFilterSensitiveLog),
/* harmony export */   AssociateSoftwareTokenResponseFilterSensitiveLog: () => (/* binding */ AssociateSoftwareTokenResponseFilterSensitiveLog),
/* harmony export */   AttributeDataType: () => (/* binding */ AttributeDataType),
/* harmony export */   AttributeTypeFilterSensitiveLog: () => (/* binding */ AttributeTypeFilterSensitiveLog),
/* harmony export */   AuthFlowType: () => (/* binding */ AuthFlowType),
/* harmony export */   AuthenticationResultTypeFilterSensitiveLog: () => (/* binding */ AuthenticationResultTypeFilterSensitiveLog),
/* harmony export */   ChallengeName: () => (/* binding */ ChallengeName),
/* harmony export */   ChallengeNameType: () => (/* binding */ ChallengeNameType),
/* harmony export */   ChallengeResponse: () => (/* binding */ ChallengeResponse),
/* harmony export */   ChangePasswordRequestFilterSensitiveLog: () => (/* binding */ ChangePasswordRequestFilterSensitiveLog),
/* harmony export */   CodeDeliveryFailureException: () => (/* binding */ CodeDeliveryFailureException),
/* harmony export */   CodeMismatchException: () => (/* binding */ CodeMismatchException),
/* harmony export */   CompromisedCredentialsEventActionType: () => (/* binding */ CompromisedCredentialsEventActionType),
/* harmony export */   ConcurrentModificationException: () => (/* binding */ ConcurrentModificationException),
/* harmony export */   ConfirmDeviceRequestFilterSensitiveLog: () => (/* binding */ ConfirmDeviceRequestFilterSensitiveLog),
/* harmony export */   ConfirmForgotPasswordRequestFilterSensitiveLog: () => (/* binding */ ConfirmForgotPasswordRequestFilterSensitiveLog),
/* harmony export */   ConfirmSignUpRequestFilterSensitiveLog: () => (/* binding */ ConfirmSignUpRequestFilterSensitiveLog),
/* harmony export */   CreateUserPoolClientResponseFilterSensitiveLog: () => (/* binding */ CreateUserPoolClientResponseFilterSensitiveLog),
/* harmony export */   CustomEmailSenderLambdaVersionType: () => (/* binding */ CustomEmailSenderLambdaVersionType),
/* harmony export */   CustomSMSSenderLambdaVersionType: () => (/* binding */ CustomSMSSenderLambdaVersionType),
/* harmony export */   DefaultEmailOptionType: () => (/* binding */ DefaultEmailOptionType),
/* harmony export */   DeleteUserAttributesRequestFilterSensitiveLog: () => (/* binding */ DeleteUserAttributesRequestFilterSensitiveLog),
/* harmony export */   DeleteUserPoolClientRequestFilterSensitiveLog: () => (/* binding */ DeleteUserPoolClientRequestFilterSensitiveLog),
/* harmony export */   DeleteUserRequestFilterSensitiveLog: () => (/* binding */ DeleteUserRequestFilterSensitiveLog),
/* harmony export */   DeletionProtectionType: () => (/* binding */ DeletionProtectionType),
/* harmony export */   DeliveryMediumType: () => (/* binding */ DeliveryMediumType),
/* harmony export */   DescribeRiskConfigurationRequestFilterSensitiveLog: () => (/* binding */ DescribeRiskConfigurationRequestFilterSensitiveLog),
/* harmony export */   DescribeRiskConfigurationResponseFilterSensitiveLog: () => (/* binding */ DescribeRiskConfigurationResponseFilterSensitiveLog),
/* harmony export */   DescribeUserPoolClientRequestFilterSensitiveLog: () => (/* binding */ DescribeUserPoolClientRequestFilterSensitiveLog),
/* harmony export */   DescribeUserPoolClientResponseFilterSensitiveLog: () => (/* binding */ DescribeUserPoolClientResponseFilterSensitiveLog),
/* harmony export */   DeviceRememberedStatusType: () => (/* binding */ DeviceRememberedStatusType),
/* harmony export */   DeviceTypeFilterSensitiveLog: () => (/* binding */ DeviceTypeFilterSensitiveLog),
/* harmony export */   DomainStatusType: () => (/* binding */ DomainStatusType),
/* harmony export */   DuplicateProviderException: () => (/* binding */ DuplicateProviderException),
/* harmony export */   EmailSendingAccountType: () => (/* binding */ EmailSendingAccountType),
/* harmony export */   EventFilterType: () => (/* binding */ EventFilterType),
/* harmony export */   EventResponseType: () => (/* binding */ EventResponseType),
/* harmony export */   EventSourceName: () => (/* binding */ EventSourceName),
/* harmony export */   EventType: () => (/* binding */ EventType),
/* harmony export */   ExpiredCodeException: () => (/* binding */ ExpiredCodeException),
/* harmony export */   ExplicitAuthFlowsType: () => (/* binding */ ExplicitAuthFlowsType),
/* harmony export */   FeedbackValueType: () => (/* binding */ FeedbackValueType),
/* harmony export */   ForbiddenException: () => (/* binding */ ForbiddenException),
/* harmony export */   ForgetDeviceRequestFilterSensitiveLog: () => (/* binding */ ForgetDeviceRequestFilterSensitiveLog),
/* harmony export */   ForgotPasswordRequestFilterSensitiveLog: () => (/* binding */ ForgotPasswordRequestFilterSensitiveLog),
/* harmony export */   GetDeviceRequestFilterSensitiveLog: () => (/* binding */ GetDeviceRequestFilterSensitiveLog),
/* harmony export */   GetDeviceResponseFilterSensitiveLog: () => (/* binding */ GetDeviceResponseFilterSensitiveLog),
/* harmony export */   GetUICustomizationRequestFilterSensitiveLog: () => (/* binding */ GetUICustomizationRequestFilterSensitiveLog),
/* harmony export */   GetUICustomizationResponseFilterSensitiveLog: () => (/* binding */ GetUICustomizationResponseFilterSensitiveLog),
/* harmony export */   GetUserAttributeVerificationCodeRequestFilterSensitiveLog: () => (/* binding */ GetUserAttributeVerificationCodeRequestFilterSensitiveLog),
/* harmony export */   GetUserRequestFilterSensitiveLog: () => (/* binding */ GetUserRequestFilterSensitiveLog),
/* harmony export */   GetUserResponseFilterSensitiveLog: () => (/* binding */ GetUserResponseFilterSensitiveLog),
/* harmony export */   GlobalSignOutRequestFilterSensitiveLog: () => (/* binding */ GlobalSignOutRequestFilterSensitiveLog),
/* harmony export */   GroupExistsException: () => (/* binding */ GroupExistsException),
/* harmony export */   IdentityProviderTypeType: () => (/* binding */ IdentityProviderTypeType),
/* harmony export */   InitiateAuthRequestFilterSensitiveLog: () => (/* binding */ InitiateAuthRequestFilterSensitiveLog),
/* harmony export */   InitiateAuthResponseFilterSensitiveLog: () => (/* binding */ InitiateAuthResponseFilterSensitiveLog),
/* harmony export */   InternalErrorException: () => (/* binding */ InternalErrorException),
/* harmony export */   InvalidEmailRoleAccessPolicyException: () => (/* binding */ InvalidEmailRoleAccessPolicyException),
/* harmony export */   InvalidLambdaResponseException: () => (/* binding */ InvalidLambdaResponseException),
/* harmony export */   InvalidOAuthFlowException: () => (/* binding */ InvalidOAuthFlowException),
/* harmony export */   InvalidParameterException: () => (/* binding */ InvalidParameterException),
/* harmony export */   InvalidPasswordException: () => (/* binding */ InvalidPasswordException),
/* harmony export */   InvalidSmsRoleAccessPolicyException: () => (/* binding */ InvalidSmsRoleAccessPolicyException),
/* harmony export */   InvalidSmsRoleTrustRelationshipException: () => (/* binding */ InvalidSmsRoleTrustRelationshipException),
/* harmony export */   InvalidUserPoolConfigurationException: () => (/* binding */ InvalidUserPoolConfigurationException),
/* harmony export */   LimitExceededException: () => (/* binding */ LimitExceededException),
/* harmony export */   ListDevicesRequestFilterSensitiveLog: () => (/* binding */ ListDevicesRequestFilterSensitiveLog),
/* harmony export */   ListDevicesResponseFilterSensitiveLog: () => (/* binding */ ListDevicesResponseFilterSensitiveLog),
/* harmony export */   ListUserPoolClientsResponseFilterSensitiveLog: () => (/* binding */ ListUserPoolClientsResponseFilterSensitiveLog),
/* harmony export */   ListUsersInGroupResponseFilterSensitiveLog: () => (/* binding */ ListUsersInGroupResponseFilterSensitiveLog),
/* harmony export */   ListUsersResponseFilterSensitiveLog: () => (/* binding */ ListUsersResponseFilterSensitiveLog),
/* harmony export */   LogLevel: () => (/* binding */ LogLevel),
/* harmony export */   MFAMethodNotFoundException: () => (/* binding */ MFAMethodNotFoundException),
/* harmony export */   MessageActionType: () => (/* binding */ MessageActionType),
/* harmony export */   NotAuthorizedException: () => (/* binding */ NotAuthorizedException),
/* harmony export */   OAuthFlowType: () => (/* binding */ OAuthFlowType),
/* harmony export */   PasswordHistoryPolicyViolationException: () => (/* binding */ PasswordHistoryPolicyViolationException),
/* harmony export */   PasswordResetRequiredException: () => (/* binding */ PasswordResetRequiredException),
/* harmony export */   PreTokenGenerationLambdaVersionType: () => (/* binding */ PreTokenGenerationLambdaVersionType),
/* harmony export */   PreconditionNotMetException: () => (/* binding */ PreconditionNotMetException),
/* harmony export */   PreventUserExistenceErrorTypes: () => (/* binding */ PreventUserExistenceErrorTypes),
/* harmony export */   RecoveryOptionNameType: () => (/* binding */ RecoveryOptionNameType),
/* harmony export */   ResendConfirmationCodeRequestFilterSensitiveLog: () => (/* binding */ ResendConfirmationCodeRequestFilterSensitiveLog),
/* harmony export */   ResourceNotFoundException: () => (/* binding */ ResourceNotFoundException),
/* harmony export */   RespondToAuthChallengeRequestFilterSensitiveLog: () => (/* binding */ RespondToAuthChallengeRequestFilterSensitiveLog),
/* harmony export */   RiskConfigurationTypeFilterSensitiveLog: () => (/* binding */ RiskConfigurationTypeFilterSensitiveLog),
/* harmony export */   RiskDecisionType: () => (/* binding */ RiskDecisionType),
/* harmony export */   RiskLevelType: () => (/* binding */ RiskLevelType),
/* harmony export */   ScopeDoesNotExistException: () => (/* binding */ ScopeDoesNotExistException),
/* harmony export */   SoftwareTokenMFANotFoundException: () => (/* binding */ SoftwareTokenMFANotFoundException),
/* harmony export */   StatusType: () => (/* binding */ StatusType),
/* harmony export */   TimeUnitsType: () => (/* binding */ TimeUnitsType),
/* harmony export */   TooManyFailedAttemptsException: () => (/* binding */ TooManyFailedAttemptsException),
/* harmony export */   TooManyRequestsException: () => (/* binding */ TooManyRequestsException),
/* harmony export */   UICustomizationTypeFilterSensitiveLog: () => (/* binding */ UICustomizationTypeFilterSensitiveLog),
/* harmony export */   UnexpectedLambdaException: () => (/* binding */ UnexpectedLambdaException),
/* harmony export */   UnsupportedIdentityProviderException: () => (/* binding */ UnsupportedIdentityProviderException),
/* harmony export */   UnsupportedUserStateException: () => (/* binding */ UnsupportedUserStateException),
/* harmony export */   UserContextDataTypeFilterSensitiveLog: () => (/* binding */ UserContextDataTypeFilterSensitiveLog),
/* harmony export */   UserImportInProgressException: () => (/* binding */ UserImportInProgressException),
/* harmony export */   UserImportJobStatusType: () => (/* binding */ UserImportJobStatusType),
/* harmony export */   UserLambdaValidationException: () => (/* binding */ UserLambdaValidationException),
/* harmony export */   UserNotConfirmedException: () => (/* binding */ UserNotConfirmedException),
/* harmony export */   UserNotFoundException: () => (/* binding */ UserNotFoundException),
/* harmony export */   UserPoolAddOnNotEnabledException: () => (/* binding */ UserPoolAddOnNotEnabledException),
/* harmony export */   UserPoolClientDescriptionFilterSensitiveLog: () => (/* binding */ UserPoolClientDescriptionFilterSensitiveLog),
/* harmony export */   UserPoolClientTypeFilterSensitiveLog: () => (/* binding */ UserPoolClientTypeFilterSensitiveLog),
/* harmony export */   UserPoolMfaType: () => (/* binding */ UserPoolMfaType),
/* harmony export */   UserPoolTaggingException: () => (/* binding */ UserPoolTaggingException),
/* harmony export */   UserStatusType: () => (/* binding */ UserStatusType),
/* harmony export */   UserTypeFilterSensitiveLog: () => (/* binding */ UserTypeFilterSensitiveLog),
/* harmony export */   UsernameAttributeType: () => (/* binding */ UsernameAttributeType),
/* harmony export */   UsernameExistsException: () => (/* binding */ UsernameExistsException),
/* harmony export */   VerifiedAttributeType: () => (/* binding */ VerifiedAttributeType)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CognitoIdentityProviderServiceException */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/CognitoIdentityProviderServiceException.js");


const RecoveryOptionNameType = {
    ADMIN_ONLY: "admin_only",
    VERIFIED_EMAIL: "verified_email",
    VERIFIED_PHONE_NUMBER: "verified_phone_number",
};
const AccountTakeoverEventActionType = {
    BLOCK: "BLOCK",
    MFA_IF_CONFIGURED: "MFA_IF_CONFIGURED",
    MFA_REQUIRED: "MFA_REQUIRED",
    NO_ACTION: "NO_ACTION",
};
const AttributeDataType = {
    BOOLEAN: "Boolean",
    DATETIME: "DateTime",
    NUMBER: "Number",
    STRING: "String",
};
class InternalErrorException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "InternalErrorException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalErrorException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalErrorException.prototype);
    }
}
class InvalidParameterException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidParameterException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
class NotAuthorizedException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "NotAuthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "NotAuthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    }
}
class ResourceNotFoundException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
class TooManyRequestsException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
class UserImportInProgressException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UserImportInProgressException",
            $fault: "client",
            ...opts,
        });
        this.name = "UserImportInProgressException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UserImportInProgressException.prototype);
    }
}
class UserNotFoundException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UserNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "UserNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UserNotFoundException.prototype);
    }
}
class InvalidLambdaResponseException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "InvalidLambdaResponseException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidLambdaResponseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidLambdaResponseException.prototype);
    }
}
class LimitExceededException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
class TooManyFailedAttemptsException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "TooManyFailedAttemptsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyFailedAttemptsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyFailedAttemptsException.prototype);
    }
}
class UnexpectedLambdaException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UnexpectedLambdaException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnexpectedLambdaException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnexpectedLambdaException.prototype);
    }
}
class UserLambdaValidationException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UserLambdaValidationException",
            $fault: "client",
            ...opts,
        });
        this.name = "UserLambdaValidationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UserLambdaValidationException.prototype);
    }
}
const DeliveryMediumType = {
    EMAIL: "EMAIL",
    SMS: "SMS",
};
const MessageActionType = {
    RESEND: "RESEND",
    SUPPRESS: "SUPPRESS",
};
const UserStatusType = {
    ARCHIVED: "ARCHIVED",
    COMPROMISED: "COMPROMISED",
    CONFIRMED: "CONFIRMED",
    EXTERNAL_PROVIDER: "EXTERNAL_PROVIDER",
    FORCE_CHANGE_PASSWORD: "FORCE_CHANGE_PASSWORD",
    RESET_REQUIRED: "RESET_REQUIRED",
    UNCONFIRMED: "UNCONFIRMED",
    UNKNOWN: "UNKNOWN",
};
class CodeDeliveryFailureException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "CodeDeliveryFailureException",
            $fault: "client",
            ...opts,
        });
        this.name = "CodeDeliveryFailureException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CodeDeliveryFailureException.prototype);
    }
}
class InvalidPasswordException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "InvalidPasswordException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidPasswordException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidPasswordException.prototype);
    }
}
class InvalidSmsRoleAccessPolicyException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "InvalidSmsRoleAccessPolicyException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSmsRoleAccessPolicyException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSmsRoleAccessPolicyException.prototype);
    }
}
class InvalidSmsRoleTrustRelationshipException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "InvalidSmsRoleTrustRelationshipException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSmsRoleTrustRelationshipException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSmsRoleTrustRelationshipException.prototype);
    }
}
class PreconditionNotMetException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "PreconditionNotMetException",
            $fault: "client",
            ...opts,
        });
        this.name = "PreconditionNotMetException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PreconditionNotMetException.prototype);
    }
}
class UnsupportedUserStateException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedUserStateException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedUserStateException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedUserStateException.prototype);
    }
}
class UsernameExistsException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UsernameExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "UsernameExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UsernameExistsException.prototype);
    }
}
class AliasExistsException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "AliasExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "AliasExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AliasExistsException.prototype);
    }
}
class InvalidUserPoolConfigurationException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "InvalidUserPoolConfigurationException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidUserPoolConfigurationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidUserPoolConfigurationException.prototype);
    }
}
const AuthFlowType = {
    ADMIN_NO_SRP_AUTH: "ADMIN_NO_SRP_AUTH",
    ADMIN_USER_PASSWORD_AUTH: "ADMIN_USER_PASSWORD_AUTH",
    CUSTOM_AUTH: "CUSTOM_AUTH",
    REFRESH_TOKEN: "REFRESH_TOKEN",
    REFRESH_TOKEN_AUTH: "REFRESH_TOKEN_AUTH",
    USER_PASSWORD_AUTH: "USER_PASSWORD_AUTH",
    USER_SRP_AUTH: "USER_SRP_AUTH",
};
const ChallengeNameType = {
    ADMIN_NO_SRP_AUTH: "ADMIN_NO_SRP_AUTH",
    CUSTOM_CHALLENGE: "CUSTOM_CHALLENGE",
    DEVICE_PASSWORD_VERIFIER: "DEVICE_PASSWORD_VERIFIER",
    DEVICE_SRP_AUTH: "DEVICE_SRP_AUTH",
    EMAIL_OTP: "EMAIL_OTP",
    MFA_SETUP: "MFA_SETUP",
    NEW_PASSWORD_REQUIRED: "NEW_PASSWORD_REQUIRED",
    PASSWORD_VERIFIER: "PASSWORD_VERIFIER",
    SELECT_MFA_TYPE: "SELECT_MFA_TYPE",
    SMS_MFA: "SMS_MFA",
    SOFTWARE_TOKEN_MFA: "SOFTWARE_TOKEN_MFA",
};
class InvalidEmailRoleAccessPolicyException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "InvalidEmailRoleAccessPolicyException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidEmailRoleAccessPolicyException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidEmailRoleAccessPolicyException.prototype);
    }
}
class MFAMethodNotFoundException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "MFAMethodNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "MFAMethodNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MFAMethodNotFoundException.prototype);
    }
}
class PasswordResetRequiredException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "PasswordResetRequiredException",
            $fault: "client",
            ...opts,
        });
        this.name = "PasswordResetRequiredException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PasswordResetRequiredException.prototype);
    }
}
class UserNotConfirmedException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UserNotConfirmedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UserNotConfirmedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UserNotConfirmedException.prototype);
    }
}
const ChallengeName = {
    Mfa: "Mfa",
    Password: "Password",
};
const ChallengeResponse = {
    Failure: "Failure",
    Success: "Success",
};
const FeedbackValueType = {
    INVALID: "Invalid",
    VALID: "Valid",
};
const EventResponseType = {
    Fail: "Fail",
    InProgress: "InProgress",
    Pass: "Pass",
};
const RiskDecisionType = {
    AccountTakeover: "AccountTakeover",
    Block: "Block",
    NoRisk: "NoRisk",
};
const RiskLevelType = {
    High: "High",
    Low: "Low",
    Medium: "Medium",
};
const EventType = {
    ForgotPassword: "ForgotPassword",
    PasswordChange: "PasswordChange",
    ResendCode: "ResendCode",
    SignIn: "SignIn",
    SignUp: "SignUp",
};
class UserPoolAddOnNotEnabledException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UserPoolAddOnNotEnabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "UserPoolAddOnNotEnabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UserPoolAddOnNotEnabledException.prototype);
    }
}
class CodeMismatchException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "CodeMismatchException",
            $fault: "client",
            ...opts,
        });
        this.name = "CodeMismatchException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CodeMismatchException.prototype);
    }
}
class ExpiredCodeException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "ExpiredCodeException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredCodeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredCodeException.prototype);
    }
}
class PasswordHistoryPolicyViolationException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "PasswordHistoryPolicyViolationException",
            $fault: "client",
            ...opts,
        });
        this.name = "PasswordHistoryPolicyViolationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PasswordHistoryPolicyViolationException.prototype);
    }
}
class SoftwareTokenMFANotFoundException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "SoftwareTokenMFANotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "SoftwareTokenMFANotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SoftwareTokenMFANotFoundException.prototype);
    }
}
const DeviceRememberedStatusType = {
    NOT_REMEMBERED: "not_remembered",
    REMEMBERED: "remembered",
};
const AdvancedSecurityEnabledModeType = {
    AUDIT: "AUDIT",
    ENFORCED: "ENFORCED",
};
const AdvancedSecurityModeType = {
    AUDIT: "AUDIT",
    ENFORCED: "ENFORCED",
    OFF: "OFF",
};
const AliasAttributeType = {
    EMAIL: "email",
    PHONE_NUMBER: "phone_number",
    PREFERRED_USERNAME: "preferred_username",
};
class ConcurrentModificationException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConcurrentModificationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    }
}
class ForbiddenException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "ForbiddenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ForbiddenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ForbiddenException.prototype);
    }
}
const VerifiedAttributeType = {
    EMAIL: "email",
    PHONE_NUMBER: "phone_number",
};
class GroupExistsException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "GroupExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "GroupExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, GroupExistsException.prototype);
    }
}
const IdentityProviderTypeType = {
    Facebook: "Facebook",
    Google: "Google",
    LoginWithAmazon: "LoginWithAmazon",
    OIDC: "OIDC",
    SAML: "SAML",
    SignInWithApple: "SignInWithApple",
};
class DuplicateProviderException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "DuplicateProviderException",
            $fault: "client",
            ...opts,
        });
        this.name = "DuplicateProviderException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DuplicateProviderException.prototype);
    }
}
const UserImportJobStatusType = {
    Created: "Created",
    Expired: "Expired",
    Failed: "Failed",
    InProgress: "InProgress",
    Pending: "Pending",
    Stopped: "Stopped",
    Stopping: "Stopping",
    Succeeded: "Succeeded",
};
const DeletionProtectionType = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
};
const EmailSendingAccountType = {
    COGNITO_DEFAULT: "COGNITO_DEFAULT",
    DEVELOPER: "DEVELOPER",
};
const CustomEmailSenderLambdaVersionType = {
    V1_0: "V1_0",
};
const CustomSMSSenderLambdaVersionType = {
    V1_0: "V1_0",
};
const PreTokenGenerationLambdaVersionType = {
    V1_0: "V1_0",
    V2_0: "V2_0",
};
const UserPoolMfaType = {
    OFF: "OFF",
    ON: "ON",
    OPTIONAL: "OPTIONAL",
};
const UsernameAttributeType = {
    EMAIL: "email",
    PHONE_NUMBER: "phone_number",
};
const DefaultEmailOptionType = {
    CONFIRM_WITH_CODE: "CONFIRM_WITH_CODE",
    CONFIRM_WITH_LINK: "CONFIRM_WITH_LINK",
};
const StatusType = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
class UserPoolTaggingException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UserPoolTaggingException",
            $fault: "client",
            ...opts,
        });
        this.name = "UserPoolTaggingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UserPoolTaggingException.prototype);
    }
}
const OAuthFlowType = {
    client_credentials: "client_credentials",
    code: "code",
    implicit: "implicit",
};
const ExplicitAuthFlowsType = {
    ADMIN_NO_SRP_AUTH: "ADMIN_NO_SRP_AUTH",
    ALLOW_ADMIN_USER_PASSWORD_AUTH: "ALLOW_ADMIN_USER_PASSWORD_AUTH",
    ALLOW_CUSTOM_AUTH: "ALLOW_CUSTOM_AUTH",
    ALLOW_REFRESH_TOKEN_AUTH: "ALLOW_REFRESH_TOKEN_AUTH",
    ALLOW_USER_PASSWORD_AUTH: "ALLOW_USER_PASSWORD_AUTH",
    ALLOW_USER_SRP_AUTH: "ALLOW_USER_SRP_AUTH",
    CUSTOM_AUTH_FLOW_ONLY: "CUSTOM_AUTH_FLOW_ONLY",
    USER_PASSWORD_AUTH: "USER_PASSWORD_AUTH",
};
const PreventUserExistenceErrorTypes = {
    ENABLED: "ENABLED",
    LEGACY: "LEGACY",
};
const TimeUnitsType = {
    DAYS: "days",
    HOURS: "hours",
    MINUTES: "minutes",
    SECONDS: "seconds",
};
class InvalidOAuthFlowException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "InvalidOAuthFlowException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidOAuthFlowException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidOAuthFlowException.prototype);
    }
}
class ScopeDoesNotExistException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "ScopeDoesNotExistException",
            $fault: "client",
            ...opts,
        });
        this.name = "ScopeDoesNotExistException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ScopeDoesNotExistException.prototype);
    }
}
class UnsupportedIdentityProviderException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedIdentityProviderException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedIdentityProviderException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedIdentityProviderException.prototype);
    }
}
const CompromisedCredentialsEventActionType = {
    BLOCK: "BLOCK",
    NO_ACTION: "NO_ACTION",
};
const EventFilterType = {
    PASSWORD_CHANGE: "PASSWORD_CHANGE",
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP",
};
const DomainStatusType = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    DELETING: "DELETING",
    FAILED: "FAILED",
    UPDATING: "UPDATING",
};
const EventSourceName = {
    USER_AUTH_EVENTS: "userAuthEvents",
    USER_NOTIFICATION: "userNotification",
};
const LogLevel = {
    ERROR: "ERROR",
    INFO: "INFO",
};
const AdminAddUserToGroupRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminConfirmSignUpRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AttributeTypeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Value && { Value: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminCreateUserRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
    }),
    ...(obj.ValidationData && {
        ValidationData: obj.ValidationData.map((item) => AttributeTypeFilterSensitiveLog(item)),
    }),
    ...(obj.TemporaryPassword && { TemporaryPassword: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const UserTypeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeTypeFilterSensitiveLog(item)) }),
});
const AdminCreateUserResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.User && { User: UserTypeFilterSensitiveLog(obj.User) }),
});
const AdminDeleteUserRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminDeleteUserAttributesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminDisableUserRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminEnableUserRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminForgetDeviceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminGetDeviceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const DeviceTypeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DeviceAttributes && {
        DeviceAttributes: obj.DeviceAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
    }),
});
const AdminGetDeviceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Device && { Device: DeviceTypeFilterSensitiveLog(obj.Device) }),
});
const AdminGetUserRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminGetUserResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
    }),
});
const AdminInitiateAuthRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.AuthParameters && { AuthParameters: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AuthenticationResultTypeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.RefreshToken && { RefreshToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.IdToken && { IdToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminInitiateAuthResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Session && { Session: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.AuthenticationResult && {
        AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
    }),
});
const AdminListDevicesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminListDevicesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const AdminListGroupsForUserRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminListUserAuthEventsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminRemoveUserFromGroupRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminResetUserPasswordRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminRespondToAuthChallengeRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.ChallengeResponses && { ChallengeResponses: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Session && { Session: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminRespondToAuthChallengeResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Session && { Session: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.AuthenticationResult && {
        AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
    }),
});
const AdminSetUserMFAPreferenceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminSetUserPasswordRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Password && { Password: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminSetUserSettingsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminUpdateDeviceStatusRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AdminUpdateUserAttributesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
    }),
});
const AdminUserGlobalSignOutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AssociateSoftwareTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Session && { Session: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const AssociateSoftwareTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SecretCode && { SecretCode: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Session && { Session: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const ChangePasswordRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PreviousPassword && { PreviousPassword: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.ProposedPassword && { ProposedPassword: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const ConfirmDeviceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const UserContextDataTypeFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ConfirmForgotPasswordRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.SecretHash && { SecretHash: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Password && { Password: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserContextData && { UserContextData: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const ConfirmSignUpRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.SecretHash && { SecretHash: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserContextData && { UserContextData: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const UserPoolClientTypeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.ClientSecret && { ClientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const CreateUserPoolClientResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientTypeFilterSensitiveLog(obj.UserPoolClient) }),
});
const DeleteUserRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const DeleteUserAttributesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const DeleteUserPoolClientRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const DescribeRiskConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const RiskConfigurationTypeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const DescribeRiskConfigurationResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RiskConfiguration && { RiskConfiguration: RiskConfigurationTypeFilterSensitiveLog(obj.RiskConfiguration) }),
});
const DescribeUserPoolClientRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const DescribeUserPoolClientResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientTypeFilterSensitiveLog(obj.UserPoolClient) }),
});
const ForgetDeviceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const ForgotPasswordRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.SecretHash && { SecretHash: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserContextData && { UserContextData: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const GetDeviceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const GetDeviceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Device && { Device: DeviceTypeFilterSensitiveLog(obj.Device) }),
});
const GetUICustomizationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const UICustomizationTypeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const GetUICustomizationResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UICustomization && { UICustomization: UICustomizationTypeFilterSensitiveLog(obj.UICustomization) }),
});
const GetUserRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const GetUserResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
    }),
});
const GetUserAttributeVerificationCodeRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const GlobalSignOutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const InitiateAuthRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AuthParameters && { AuthParameters: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserContextData && { UserContextData: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const InitiateAuthResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Session && { Session: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.AuthenticationResult && {
        AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
    }),
});
const ListDevicesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const ListDevicesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const UserPoolClientDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const ListUserPoolClientsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserPoolClients && {
        UserPoolClients: obj.UserPoolClients.map((item) => UserPoolClientDescriptionFilterSensitiveLog(item)),
    }),
});
const ListUsersResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Users && { Users: obj.Users.map((item) => UserTypeFilterSensitiveLog(item)) }),
});
const ListUsersInGroupResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Users && { Users: obj.Users.map((item) => UserTypeFilterSensitiveLog(item)) }),
});
const ResendConfirmationCodeRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.SecretHash && { SecretHash: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserContextData && { UserContextData: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const RespondToAuthChallengeRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Session && { Session: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.ChallengeResponses && { ChallengeResponses: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserContextData && { UserContextData: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/models_1.js":
/*!*********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/models_1.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnableSoftwareTokenMFAException: () => (/* binding */ EnableSoftwareTokenMFAException),
/* harmony export */   RespondToAuthChallengeResponseFilterSensitiveLog: () => (/* binding */ RespondToAuthChallengeResponseFilterSensitiveLog),
/* harmony export */   RevokeTokenRequestFilterSensitiveLog: () => (/* binding */ RevokeTokenRequestFilterSensitiveLog),
/* harmony export */   SetRiskConfigurationRequestFilterSensitiveLog: () => (/* binding */ SetRiskConfigurationRequestFilterSensitiveLog),
/* harmony export */   SetRiskConfigurationResponseFilterSensitiveLog: () => (/* binding */ SetRiskConfigurationResponseFilterSensitiveLog),
/* harmony export */   SetUICustomizationRequestFilterSensitiveLog: () => (/* binding */ SetUICustomizationRequestFilterSensitiveLog),
/* harmony export */   SetUICustomizationResponseFilterSensitiveLog: () => (/* binding */ SetUICustomizationResponseFilterSensitiveLog),
/* harmony export */   SetUserMFAPreferenceRequestFilterSensitiveLog: () => (/* binding */ SetUserMFAPreferenceRequestFilterSensitiveLog),
/* harmony export */   SetUserSettingsRequestFilterSensitiveLog: () => (/* binding */ SetUserSettingsRequestFilterSensitiveLog),
/* harmony export */   SignUpRequestFilterSensitiveLog: () => (/* binding */ SignUpRequestFilterSensitiveLog),
/* harmony export */   UnauthorizedException: () => (/* binding */ UnauthorizedException),
/* harmony export */   UnsupportedOperationException: () => (/* binding */ UnsupportedOperationException),
/* harmony export */   UnsupportedTokenTypeException: () => (/* binding */ UnsupportedTokenTypeException),
/* harmony export */   UpdateAuthEventFeedbackRequestFilterSensitiveLog: () => (/* binding */ UpdateAuthEventFeedbackRequestFilterSensitiveLog),
/* harmony export */   UpdateDeviceStatusRequestFilterSensitiveLog: () => (/* binding */ UpdateDeviceStatusRequestFilterSensitiveLog),
/* harmony export */   UpdateUserAttributesRequestFilterSensitiveLog: () => (/* binding */ UpdateUserAttributesRequestFilterSensitiveLog),
/* harmony export */   UpdateUserPoolClientRequestFilterSensitiveLog: () => (/* binding */ UpdateUserPoolClientRequestFilterSensitiveLog),
/* harmony export */   UpdateUserPoolClientResponseFilterSensitiveLog: () => (/* binding */ UpdateUserPoolClientResponseFilterSensitiveLog),
/* harmony export */   VerifySoftwareTokenRequestFilterSensitiveLog: () => (/* binding */ VerifySoftwareTokenRequestFilterSensitiveLog),
/* harmony export */   VerifySoftwareTokenResponseFilterSensitiveLog: () => (/* binding */ VerifySoftwareTokenResponseFilterSensitiveLog),
/* harmony export */   VerifySoftwareTokenResponseType: () => (/* binding */ VerifySoftwareTokenResponseType),
/* harmony export */   VerifyUserAttributeRequestFilterSensitiveLog: () => (/* binding */ VerifyUserAttributeRequestFilterSensitiveLog)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CognitoIdentityProviderServiceException */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/CognitoIdentityProviderServiceException.js");
/* harmony import */ var _models_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models_0 */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/models_0.js");



class UnauthorizedException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
class UnsupportedOperationException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedOperationException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedOperationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    }
}
class UnsupportedTokenTypeException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedTokenTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedTokenTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedTokenTypeException.prototype);
    }
}
class EnableSoftwareTokenMFAException extends _CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_1__.CognitoIdentityProviderServiceException {
    constructor(opts) {
        super({
            name: "EnableSoftwareTokenMFAException",
            $fault: "client",
            ...opts,
        });
        this.name = "EnableSoftwareTokenMFAException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EnableSoftwareTokenMFAException.prototype);
    }
}
const VerifySoftwareTokenResponseType = {
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
};
const RespondToAuthChallengeResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Session && { Session: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.AuthenticationResult && {
        AuthenticationResult: (0,_models_0__WEBPACK_IMPORTED_MODULE_2__.AuthenticationResultTypeFilterSensitiveLog)(obj.AuthenticationResult),
    }),
});
const RevokeTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Token && { Token: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.ClientSecret && { ClientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const SetRiskConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const SetRiskConfigurationResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RiskConfiguration && { RiskConfiguration: (0,_models_0__WEBPACK_IMPORTED_MODULE_2__.RiskConfigurationTypeFilterSensitiveLog)(obj.RiskConfiguration) }),
});
const SetUICustomizationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const SetUICustomizationResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UICustomization && { UICustomization: (0,_models_0__WEBPACK_IMPORTED_MODULE_2__.UICustomizationTypeFilterSensitiveLog)(obj.UICustomization) }),
});
const SetUserMFAPreferenceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const SetUserSettingsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const SignUpRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.SecretHash && { SecretHash: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Password && { Password: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map((item) => (0,_models_0__WEBPACK_IMPORTED_MODULE_2__.AttributeTypeFilterSensitiveLog)(item)),
    }),
    ...(obj.ValidationData && {
        ValidationData: obj.ValidationData.map((item) => (0,_models_0__WEBPACK_IMPORTED_MODULE_2__.AttributeTypeFilterSensitiveLog)(item)),
    }),
    ...(obj.UserContextData && { UserContextData: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const UpdateAuthEventFeedbackRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.FeedbackToken && { FeedbackToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const UpdateDeviceStatusRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const UpdateUserAttributesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserAttributes && {
        UserAttributes: obj.UserAttributes.map((item) => (0,_models_0__WEBPACK_IMPORTED_MODULE_2__.AttributeTypeFilterSensitiveLog)(item)),
    }),
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const UpdateUserPoolClientRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientId && { ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const UpdateUserPoolClientResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.UserPoolClient && { UserPoolClient: (0,_models_0__WEBPACK_IMPORTED_MODULE_2__.UserPoolClientTypeFilterSensitiveLog)(obj.UserPoolClient) }),
});
const VerifySoftwareTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.Session && { Session: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
    ...(obj.UserCode && { UserCode: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const VerifySoftwareTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Session && { Session: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const VerifyUserAttributeRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/protocols/Aws_json1_1.js":
/*!***************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/protocols/Aws_json1_1.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   de_AddCustomAttributesCommand: () => (/* binding */ de_AddCustomAttributesCommand),
/* harmony export */   de_AdminAddUserToGroupCommand: () => (/* binding */ de_AdminAddUserToGroupCommand),
/* harmony export */   de_AdminConfirmSignUpCommand: () => (/* binding */ de_AdminConfirmSignUpCommand),
/* harmony export */   de_AdminCreateUserCommand: () => (/* binding */ de_AdminCreateUserCommand),
/* harmony export */   de_AdminDeleteUserAttributesCommand: () => (/* binding */ de_AdminDeleteUserAttributesCommand),
/* harmony export */   de_AdminDeleteUserCommand: () => (/* binding */ de_AdminDeleteUserCommand),
/* harmony export */   de_AdminDisableProviderForUserCommand: () => (/* binding */ de_AdminDisableProviderForUserCommand),
/* harmony export */   de_AdminDisableUserCommand: () => (/* binding */ de_AdminDisableUserCommand),
/* harmony export */   de_AdminEnableUserCommand: () => (/* binding */ de_AdminEnableUserCommand),
/* harmony export */   de_AdminForgetDeviceCommand: () => (/* binding */ de_AdminForgetDeviceCommand),
/* harmony export */   de_AdminGetDeviceCommand: () => (/* binding */ de_AdminGetDeviceCommand),
/* harmony export */   de_AdminGetUserCommand: () => (/* binding */ de_AdminGetUserCommand),
/* harmony export */   de_AdminInitiateAuthCommand: () => (/* binding */ de_AdminInitiateAuthCommand),
/* harmony export */   de_AdminLinkProviderForUserCommand: () => (/* binding */ de_AdminLinkProviderForUserCommand),
/* harmony export */   de_AdminListDevicesCommand: () => (/* binding */ de_AdminListDevicesCommand),
/* harmony export */   de_AdminListGroupsForUserCommand: () => (/* binding */ de_AdminListGroupsForUserCommand),
/* harmony export */   de_AdminListUserAuthEventsCommand: () => (/* binding */ de_AdminListUserAuthEventsCommand),
/* harmony export */   de_AdminRemoveUserFromGroupCommand: () => (/* binding */ de_AdminRemoveUserFromGroupCommand),
/* harmony export */   de_AdminResetUserPasswordCommand: () => (/* binding */ de_AdminResetUserPasswordCommand),
/* harmony export */   de_AdminRespondToAuthChallengeCommand: () => (/* binding */ de_AdminRespondToAuthChallengeCommand),
/* harmony export */   de_AdminSetUserMFAPreferenceCommand: () => (/* binding */ de_AdminSetUserMFAPreferenceCommand),
/* harmony export */   de_AdminSetUserPasswordCommand: () => (/* binding */ de_AdminSetUserPasswordCommand),
/* harmony export */   de_AdminSetUserSettingsCommand: () => (/* binding */ de_AdminSetUserSettingsCommand),
/* harmony export */   de_AdminUpdateAuthEventFeedbackCommand: () => (/* binding */ de_AdminUpdateAuthEventFeedbackCommand),
/* harmony export */   de_AdminUpdateDeviceStatusCommand: () => (/* binding */ de_AdminUpdateDeviceStatusCommand),
/* harmony export */   de_AdminUpdateUserAttributesCommand: () => (/* binding */ de_AdminUpdateUserAttributesCommand),
/* harmony export */   de_AdminUserGlobalSignOutCommand: () => (/* binding */ de_AdminUserGlobalSignOutCommand),
/* harmony export */   de_AssociateSoftwareTokenCommand: () => (/* binding */ de_AssociateSoftwareTokenCommand),
/* harmony export */   de_ChangePasswordCommand: () => (/* binding */ de_ChangePasswordCommand),
/* harmony export */   de_ConfirmDeviceCommand: () => (/* binding */ de_ConfirmDeviceCommand),
/* harmony export */   de_ConfirmForgotPasswordCommand: () => (/* binding */ de_ConfirmForgotPasswordCommand),
/* harmony export */   de_ConfirmSignUpCommand: () => (/* binding */ de_ConfirmSignUpCommand),
/* harmony export */   de_CreateGroupCommand: () => (/* binding */ de_CreateGroupCommand),
/* harmony export */   de_CreateIdentityProviderCommand: () => (/* binding */ de_CreateIdentityProviderCommand),
/* harmony export */   de_CreateResourceServerCommand: () => (/* binding */ de_CreateResourceServerCommand),
/* harmony export */   de_CreateUserImportJobCommand: () => (/* binding */ de_CreateUserImportJobCommand),
/* harmony export */   de_CreateUserPoolClientCommand: () => (/* binding */ de_CreateUserPoolClientCommand),
/* harmony export */   de_CreateUserPoolCommand: () => (/* binding */ de_CreateUserPoolCommand),
/* harmony export */   de_CreateUserPoolDomainCommand: () => (/* binding */ de_CreateUserPoolDomainCommand),
/* harmony export */   de_DeleteGroupCommand: () => (/* binding */ de_DeleteGroupCommand),
/* harmony export */   de_DeleteIdentityProviderCommand: () => (/* binding */ de_DeleteIdentityProviderCommand),
/* harmony export */   de_DeleteResourceServerCommand: () => (/* binding */ de_DeleteResourceServerCommand),
/* harmony export */   de_DeleteUserAttributesCommand: () => (/* binding */ de_DeleteUserAttributesCommand),
/* harmony export */   de_DeleteUserCommand: () => (/* binding */ de_DeleteUserCommand),
/* harmony export */   de_DeleteUserPoolClientCommand: () => (/* binding */ de_DeleteUserPoolClientCommand),
/* harmony export */   de_DeleteUserPoolCommand: () => (/* binding */ de_DeleteUserPoolCommand),
/* harmony export */   de_DeleteUserPoolDomainCommand: () => (/* binding */ de_DeleteUserPoolDomainCommand),
/* harmony export */   de_DescribeIdentityProviderCommand: () => (/* binding */ de_DescribeIdentityProviderCommand),
/* harmony export */   de_DescribeResourceServerCommand: () => (/* binding */ de_DescribeResourceServerCommand),
/* harmony export */   de_DescribeRiskConfigurationCommand: () => (/* binding */ de_DescribeRiskConfigurationCommand),
/* harmony export */   de_DescribeUserImportJobCommand: () => (/* binding */ de_DescribeUserImportJobCommand),
/* harmony export */   de_DescribeUserPoolClientCommand: () => (/* binding */ de_DescribeUserPoolClientCommand),
/* harmony export */   de_DescribeUserPoolCommand: () => (/* binding */ de_DescribeUserPoolCommand),
/* harmony export */   de_DescribeUserPoolDomainCommand: () => (/* binding */ de_DescribeUserPoolDomainCommand),
/* harmony export */   de_ForgetDeviceCommand: () => (/* binding */ de_ForgetDeviceCommand),
/* harmony export */   de_ForgotPasswordCommand: () => (/* binding */ de_ForgotPasswordCommand),
/* harmony export */   de_GetCSVHeaderCommand: () => (/* binding */ de_GetCSVHeaderCommand),
/* harmony export */   de_GetDeviceCommand: () => (/* binding */ de_GetDeviceCommand),
/* harmony export */   de_GetGroupCommand: () => (/* binding */ de_GetGroupCommand),
/* harmony export */   de_GetIdentityProviderByIdentifierCommand: () => (/* binding */ de_GetIdentityProviderByIdentifierCommand),
/* harmony export */   de_GetLogDeliveryConfigurationCommand: () => (/* binding */ de_GetLogDeliveryConfigurationCommand),
/* harmony export */   de_GetSigningCertificateCommand: () => (/* binding */ de_GetSigningCertificateCommand),
/* harmony export */   de_GetUICustomizationCommand: () => (/* binding */ de_GetUICustomizationCommand),
/* harmony export */   de_GetUserAttributeVerificationCodeCommand: () => (/* binding */ de_GetUserAttributeVerificationCodeCommand),
/* harmony export */   de_GetUserCommand: () => (/* binding */ de_GetUserCommand),
/* harmony export */   de_GetUserPoolMfaConfigCommand: () => (/* binding */ de_GetUserPoolMfaConfigCommand),
/* harmony export */   de_GlobalSignOutCommand: () => (/* binding */ de_GlobalSignOutCommand),
/* harmony export */   de_InitiateAuthCommand: () => (/* binding */ de_InitiateAuthCommand),
/* harmony export */   de_ListDevicesCommand: () => (/* binding */ de_ListDevicesCommand),
/* harmony export */   de_ListGroupsCommand: () => (/* binding */ de_ListGroupsCommand),
/* harmony export */   de_ListIdentityProvidersCommand: () => (/* binding */ de_ListIdentityProvidersCommand),
/* harmony export */   de_ListResourceServersCommand: () => (/* binding */ de_ListResourceServersCommand),
/* harmony export */   de_ListTagsForResourceCommand: () => (/* binding */ de_ListTagsForResourceCommand),
/* harmony export */   de_ListUserImportJobsCommand: () => (/* binding */ de_ListUserImportJobsCommand),
/* harmony export */   de_ListUserPoolClientsCommand: () => (/* binding */ de_ListUserPoolClientsCommand),
/* harmony export */   de_ListUserPoolsCommand: () => (/* binding */ de_ListUserPoolsCommand),
/* harmony export */   de_ListUsersCommand: () => (/* binding */ de_ListUsersCommand),
/* harmony export */   de_ListUsersInGroupCommand: () => (/* binding */ de_ListUsersInGroupCommand),
/* harmony export */   de_ResendConfirmationCodeCommand: () => (/* binding */ de_ResendConfirmationCodeCommand),
/* harmony export */   de_RespondToAuthChallengeCommand: () => (/* binding */ de_RespondToAuthChallengeCommand),
/* harmony export */   de_RevokeTokenCommand: () => (/* binding */ de_RevokeTokenCommand),
/* harmony export */   de_SetLogDeliveryConfigurationCommand: () => (/* binding */ de_SetLogDeliveryConfigurationCommand),
/* harmony export */   de_SetRiskConfigurationCommand: () => (/* binding */ de_SetRiskConfigurationCommand),
/* harmony export */   de_SetUICustomizationCommand: () => (/* binding */ de_SetUICustomizationCommand),
/* harmony export */   de_SetUserMFAPreferenceCommand: () => (/* binding */ de_SetUserMFAPreferenceCommand),
/* harmony export */   de_SetUserPoolMfaConfigCommand: () => (/* binding */ de_SetUserPoolMfaConfigCommand),
/* harmony export */   de_SetUserSettingsCommand: () => (/* binding */ de_SetUserSettingsCommand),
/* harmony export */   de_SignUpCommand: () => (/* binding */ de_SignUpCommand),
/* harmony export */   de_StartUserImportJobCommand: () => (/* binding */ de_StartUserImportJobCommand),
/* harmony export */   de_StopUserImportJobCommand: () => (/* binding */ de_StopUserImportJobCommand),
/* harmony export */   de_TagResourceCommand: () => (/* binding */ de_TagResourceCommand),
/* harmony export */   de_UntagResourceCommand: () => (/* binding */ de_UntagResourceCommand),
/* harmony export */   de_UpdateAuthEventFeedbackCommand: () => (/* binding */ de_UpdateAuthEventFeedbackCommand),
/* harmony export */   de_UpdateDeviceStatusCommand: () => (/* binding */ de_UpdateDeviceStatusCommand),
/* harmony export */   de_UpdateGroupCommand: () => (/* binding */ de_UpdateGroupCommand),
/* harmony export */   de_UpdateIdentityProviderCommand: () => (/* binding */ de_UpdateIdentityProviderCommand),
/* harmony export */   de_UpdateResourceServerCommand: () => (/* binding */ de_UpdateResourceServerCommand),
/* harmony export */   de_UpdateUserAttributesCommand: () => (/* binding */ de_UpdateUserAttributesCommand),
/* harmony export */   de_UpdateUserPoolClientCommand: () => (/* binding */ de_UpdateUserPoolClientCommand),
/* harmony export */   de_UpdateUserPoolCommand: () => (/* binding */ de_UpdateUserPoolCommand),
/* harmony export */   de_UpdateUserPoolDomainCommand: () => (/* binding */ de_UpdateUserPoolDomainCommand),
/* harmony export */   de_VerifySoftwareTokenCommand: () => (/* binding */ de_VerifySoftwareTokenCommand),
/* harmony export */   de_VerifyUserAttributeCommand: () => (/* binding */ de_VerifyUserAttributeCommand),
/* harmony export */   se_AddCustomAttributesCommand: () => (/* binding */ se_AddCustomAttributesCommand),
/* harmony export */   se_AdminAddUserToGroupCommand: () => (/* binding */ se_AdminAddUserToGroupCommand),
/* harmony export */   se_AdminConfirmSignUpCommand: () => (/* binding */ se_AdminConfirmSignUpCommand),
/* harmony export */   se_AdminCreateUserCommand: () => (/* binding */ se_AdminCreateUserCommand),
/* harmony export */   se_AdminDeleteUserAttributesCommand: () => (/* binding */ se_AdminDeleteUserAttributesCommand),
/* harmony export */   se_AdminDeleteUserCommand: () => (/* binding */ se_AdminDeleteUserCommand),
/* harmony export */   se_AdminDisableProviderForUserCommand: () => (/* binding */ se_AdminDisableProviderForUserCommand),
/* harmony export */   se_AdminDisableUserCommand: () => (/* binding */ se_AdminDisableUserCommand),
/* harmony export */   se_AdminEnableUserCommand: () => (/* binding */ se_AdminEnableUserCommand),
/* harmony export */   se_AdminForgetDeviceCommand: () => (/* binding */ se_AdminForgetDeviceCommand),
/* harmony export */   se_AdminGetDeviceCommand: () => (/* binding */ se_AdminGetDeviceCommand),
/* harmony export */   se_AdminGetUserCommand: () => (/* binding */ se_AdminGetUserCommand),
/* harmony export */   se_AdminInitiateAuthCommand: () => (/* binding */ se_AdminInitiateAuthCommand),
/* harmony export */   se_AdminLinkProviderForUserCommand: () => (/* binding */ se_AdminLinkProviderForUserCommand),
/* harmony export */   se_AdminListDevicesCommand: () => (/* binding */ se_AdminListDevicesCommand),
/* harmony export */   se_AdminListGroupsForUserCommand: () => (/* binding */ se_AdminListGroupsForUserCommand),
/* harmony export */   se_AdminListUserAuthEventsCommand: () => (/* binding */ se_AdminListUserAuthEventsCommand),
/* harmony export */   se_AdminRemoveUserFromGroupCommand: () => (/* binding */ se_AdminRemoveUserFromGroupCommand),
/* harmony export */   se_AdminResetUserPasswordCommand: () => (/* binding */ se_AdminResetUserPasswordCommand),
/* harmony export */   se_AdminRespondToAuthChallengeCommand: () => (/* binding */ se_AdminRespondToAuthChallengeCommand),
/* harmony export */   se_AdminSetUserMFAPreferenceCommand: () => (/* binding */ se_AdminSetUserMFAPreferenceCommand),
/* harmony export */   se_AdminSetUserPasswordCommand: () => (/* binding */ se_AdminSetUserPasswordCommand),
/* harmony export */   se_AdminSetUserSettingsCommand: () => (/* binding */ se_AdminSetUserSettingsCommand),
/* harmony export */   se_AdminUpdateAuthEventFeedbackCommand: () => (/* binding */ se_AdminUpdateAuthEventFeedbackCommand),
/* harmony export */   se_AdminUpdateDeviceStatusCommand: () => (/* binding */ se_AdminUpdateDeviceStatusCommand),
/* harmony export */   se_AdminUpdateUserAttributesCommand: () => (/* binding */ se_AdminUpdateUserAttributesCommand),
/* harmony export */   se_AdminUserGlobalSignOutCommand: () => (/* binding */ se_AdminUserGlobalSignOutCommand),
/* harmony export */   se_AssociateSoftwareTokenCommand: () => (/* binding */ se_AssociateSoftwareTokenCommand),
/* harmony export */   se_ChangePasswordCommand: () => (/* binding */ se_ChangePasswordCommand),
/* harmony export */   se_ConfirmDeviceCommand: () => (/* binding */ se_ConfirmDeviceCommand),
/* harmony export */   se_ConfirmForgotPasswordCommand: () => (/* binding */ se_ConfirmForgotPasswordCommand),
/* harmony export */   se_ConfirmSignUpCommand: () => (/* binding */ se_ConfirmSignUpCommand),
/* harmony export */   se_CreateGroupCommand: () => (/* binding */ se_CreateGroupCommand),
/* harmony export */   se_CreateIdentityProviderCommand: () => (/* binding */ se_CreateIdentityProviderCommand),
/* harmony export */   se_CreateResourceServerCommand: () => (/* binding */ se_CreateResourceServerCommand),
/* harmony export */   se_CreateUserImportJobCommand: () => (/* binding */ se_CreateUserImportJobCommand),
/* harmony export */   se_CreateUserPoolClientCommand: () => (/* binding */ se_CreateUserPoolClientCommand),
/* harmony export */   se_CreateUserPoolCommand: () => (/* binding */ se_CreateUserPoolCommand),
/* harmony export */   se_CreateUserPoolDomainCommand: () => (/* binding */ se_CreateUserPoolDomainCommand),
/* harmony export */   se_DeleteGroupCommand: () => (/* binding */ se_DeleteGroupCommand),
/* harmony export */   se_DeleteIdentityProviderCommand: () => (/* binding */ se_DeleteIdentityProviderCommand),
/* harmony export */   se_DeleteResourceServerCommand: () => (/* binding */ se_DeleteResourceServerCommand),
/* harmony export */   se_DeleteUserAttributesCommand: () => (/* binding */ se_DeleteUserAttributesCommand),
/* harmony export */   se_DeleteUserCommand: () => (/* binding */ se_DeleteUserCommand),
/* harmony export */   se_DeleteUserPoolClientCommand: () => (/* binding */ se_DeleteUserPoolClientCommand),
/* harmony export */   se_DeleteUserPoolCommand: () => (/* binding */ se_DeleteUserPoolCommand),
/* harmony export */   se_DeleteUserPoolDomainCommand: () => (/* binding */ se_DeleteUserPoolDomainCommand),
/* harmony export */   se_DescribeIdentityProviderCommand: () => (/* binding */ se_DescribeIdentityProviderCommand),
/* harmony export */   se_DescribeResourceServerCommand: () => (/* binding */ se_DescribeResourceServerCommand),
/* harmony export */   se_DescribeRiskConfigurationCommand: () => (/* binding */ se_DescribeRiskConfigurationCommand),
/* harmony export */   se_DescribeUserImportJobCommand: () => (/* binding */ se_DescribeUserImportJobCommand),
/* harmony export */   se_DescribeUserPoolClientCommand: () => (/* binding */ se_DescribeUserPoolClientCommand),
/* harmony export */   se_DescribeUserPoolCommand: () => (/* binding */ se_DescribeUserPoolCommand),
/* harmony export */   se_DescribeUserPoolDomainCommand: () => (/* binding */ se_DescribeUserPoolDomainCommand),
/* harmony export */   se_ForgetDeviceCommand: () => (/* binding */ se_ForgetDeviceCommand),
/* harmony export */   se_ForgotPasswordCommand: () => (/* binding */ se_ForgotPasswordCommand),
/* harmony export */   se_GetCSVHeaderCommand: () => (/* binding */ se_GetCSVHeaderCommand),
/* harmony export */   se_GetDeviceCommand: () => (/* binding */ se_GetDeviceCommand),
/* harmony export */   se_GetGroupCommand: () => (/* binding */ se_GetGroupCommand),
/* harmony export */   se_GetIdentityProviderByIdentifierCommand: () => (/* binding */ se_GetIdentityProviderByIdentifierCommand),
/* harmony export */   se_GetLogDeliveryConfigurationCommand: () => (/* binding */ se_GetLogDeliveryConfigurationCommand),
/* harmony export */   se_GetSigningCertificateCommand: () => (/* binding */ se_GetSigningCertificateCommand),
/* harmony export */   se_GetUICustomizationCommand: () => (/* binding */ se_GetUICustomizationCommand),
/* harmony export */   se_GetUserAttributeVerificationCodeCommand: () => (/* binding */ se_GetUserAttributeVerificationCodeCommand),
/* harmony export */   se_GetUserCommand: () => (/* binding */ se_GetUserCommand),
/* harmony export */   se_GetUserPoolMfaConfigCommand: () => (/* binding */ se_GetUserPoolMfaConfigCommand),
/* harmony export */   se_GlobalSignOutCommand: () => (/* binding */ se_GlobalSignOutCommand),
/* harmony export */   se_InitiateAuthCommand: () => (/* binding */ se_InitiateAuthCommand),
/* harmony export */   se_ListDevicesCommand: () => (/* binding */ se_ListDevicesCommand),
/* harmony export */   se_ListGroupsCommand: () => (/* binding */ se_ListGroupsCommand),
/* harmony export */   se_ListIdentityProvidersCommand: () => (/* binding */ se_ListIdentityProvidersCommand),
/* harmony export */   se_ListResourceServersCommand: () => (/* binding */ se_ListResourceServersCommand),
/* harmony export */   se_ListTagsForResourceCommand: () => (/* binding */ se_ListTagsForResourceCommand),
/* harmony export */   se_ListUserImportJobsCommand: () => (/* binding */ se_ListUserImportJobsCommand),
/* harmony export */   se_ListUserPoolClientsCommand: () => (/* binding */ se_ListUserPoolClientsCommand),
/* harmony export */   se_ListUserPoolsCommand: () => (/* binding */ se_ListUserPoolsCommand),
/* harmony export */   se_ListUsersCommand: () => (/* binding */ se_ListUsersCommand),
/* harmony export */   se_ListUsersInGroupCommand: () => (/* binding */ se_ListUsersInGroupCommand),
/* harmony export */   se_ResendConfirmationCodeCommand: () => (/* binding */ se_ResendConfirmationCodeCommand),
/* harmony export */   se_RespondToAuthChallengeCommand: () => (/* binding */ se_RespondToAuthChallengeCommand),
/* harmony export */   se_RevokeTokenCommand: () => (/* binding */ se_RevokeTokenCommand),
/* harmony export */   se_SetLogDeliveryConfigurationCommand: () => (/* binding */ se_SetLogDeliveryConfigurationCommand),
/* harmony export */   se_SetRiskConfigurationCommand: () => (/* binding */ se_SetRiskConfigurationCommand),
/* harmony export */   se_SetUICustomizationCommand: () => (/* binding */ se_SetUICustomizationCommand),
/* harmony export */   se_SetUserMFAPreferenceCommand: () => (/* binding */ se_SetUserMFAPreferenceCommand),
/* harmony export */   se_SetUserPoolMfaConfigCommand: () => (/* binding */ se_SetUserPoolMfaConfigCommand),
/* harmony export */   se_SetUserSettingsCommand: () => (/* binding */ se_SetUserSettingsCommand),
/* harmony export */   se_SignUpCommand: () => (/* binding */ se_SignUpCommand),
/* harmony export */   se_StartUserImportJobCommand: () => (/* binding */ se_StartUserImportJobCommand),
/* harmony export */   se_StopUserImportJobCommand: () => (/* binding */ se_StopUserImportJobCommand),
/* harmony export */   se_TagResourceCommand: () => (/* binding */ se_TagResourceCommand),
/* harmony export */   se_UntagResourceCommand: () => (/* binding */ se_UntagResourceCommand),
/* harmony export */   se_UpdateAuthEventFeedbackCommand: () => (/* binding */ se_UpdateAuthEventFeedbackCommand),
/* harmony export */   se_UpdateDeviceStatusCommand: () => (/* binding */ se_UpdateDeviceStatusCommand),
/* harmony export */   se_UpdateGroupCommand: () => (/* binding */ se_UpdateGroupCommand),
/* harmony export */   se_UpdateIdentityProviderCommand: () => (/* binding */ se_UpdateIdentityProviderCommand),
/* harmony export */   se_UpdateResourceServerCommand: () => (/* binding */ se_UpdateResourceServerCommand),
/* harmony export */   se_UpdateUserAttributesCommand: () => (/* binding */ se_UpdateUserAttributesCommand),
/* harmony export */   se_UpdateUserPoolClientCommand: () => (/* binding */ se_UpdateUserPoolClientCommand),
/* harmony export */   se_UpdateUserPoolCommand: () => (/* binding */ se_UpdateUserPoolCommand),
/* harmony export */   se_UpdateUserPoolDomainCommand: () => (/* binding */ se_UpdateUserPoolDomainCommand),
/* harmony export */   se_VerifySoftwareTokenCommand: () => (/* binding */ se_VerifySoftwareTokenCommand),
/* harmony export */   se_VerifyUserAttributeCommand: () => (/* binding */ se_VerifyUserAttributeCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/core */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js");
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _models_CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/CognitoIdentityProviderServiceException */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/CognitoIdentityProviderServiceException.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models_0 */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/models_0.js");
/* harmony import */ var _models_models_1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models_1 */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/models/models_1.js");






const se_AddCustomAttributesCommand = async (input, context) => {
    const headers = sharedHeaders("AddCustomAttributes");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminAddUserToGroupCommand = async (input, context) => {
    const headers = sharedHeaders("AdminAddUserToGroup");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminConfirmSignUpCommand = async (input, context) => {
    const headers = sharedHeaders("AdminConfirmSignUp");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminCreateUserCommand = async (input, context) => {
    const headers = sharedHeaders("AdminCreateUser");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminDeleteUserCommand = async (input, context) => {
    const headers = sharedHeaders("AdminDeleteUser");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminDeleteUserAttributesCommand = async (input, context) => {
    const headers = sharedHeaders("AdminDeleteUserAttributes");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminDisableProviderForUserCommand = async (input, context) => {
    const headers = sharedHeaders("AdminDisableProviderForUser");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminDisableUserCommand = async (input, context) => {
    const headers = sharedHeaders("AdminDisableUser");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminEnableUserCommand = async (input, context) => {
    const headers = sharedHeaders("AdminEnableUser");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminForgetDeviceCommand = async (input, context) => {
    const headers = sharedHeaders("AdminForgetDevice");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminGetDeviceCommand = async (input, context) => {
    const headers = sharedHeaders("AdminGetDevice");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminGetUserCommand = async (input, context) => {
    const headers = sharedHeaders("AdminGetUser");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminInitiateAuthCommand = async (input, context) => {
    const headers = sharedHeaders("AdminInitiateAuth");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminLinkProviderForUserCommand = async (input, context) => {
    const headers = sharedHeaders("AdminLinkProviderForUser");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminListDevicesCommand = async (input, context) => {
    const headers = sharedHeaders("AdminListDevices");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminListGroupsForUserCommand = async (input, context) => {
    const headers = sharedHeaders("AdminListGroupsForUser");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminListUserAuthEventsCommand = async (input, context) => {
    const headers = sharedHeaders("AdminListUserAuthEvents");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminRemoveUserFromGroupCommand = async (input, context) => {
    const headers = sharedHeaders("AdminRemoveUserFromGroup");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminResetUserPasswordCommand = async (input, context) => {
    const headers = sharedHeaders("AdminResetUserPassword");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminRespondToAuthChallengeCommand = async (input, context) => {
    const headers = sharedHeaders("AdminRespondToAuthChallenge");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminSetUserMFAPreferenceCommand = async (input, context) => {
    const headers = sharedHeaders("AdminSetUserMFAPreference");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminSetUserPasswordCommand = async (input, context) => {
    const headers = sharedHeaders("AdminSetUserPassword");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminSetUserSettingsCommand = async (input, context) => {
    const headers = sharedHeaders("AdminSetUserSettings");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminUpdateAuthEventFeedbackCommand = async (input, context) => {
    const headers = sharedHeaders("AdminUpdateAuthEventFeedback");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminUpdateDeviceStatusCommand = async (input, context) => {
    const headers = sharedHeaders("AdminUpdateDeviceStatus");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminUpdateUserAttributesCommand = async (input, context) => {
    const headers = sharedHeaders("AdminUpdateUserAttributes");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AdminUserGlobalSignOutCommand = async (input, context) => {
    const headers = sharedHeaders("AdminUserGlobalSignOut");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AssociateSoftwareTokenCommand = async (input, context) => {
    const headers = sharedHeaders("AssociateSoftwareToken");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ChangePasswordCommand = async (input, context) => {
    const headers = sharedHeaders("ChangePassword");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ConfirmDeviceCommand = async (input, context) => {
    const headers = sharedHeaders("ConfirmDevice");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ConfirmForgotPasswordCommand = async (input, context) => {
    const headers = sharedHeaders("ConfirmForgotPassword");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ConfirmSignUpCommand = async (input, context) => {
    const headers = sharedHeaders("ConfirmSignUp");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateGroupCommand = async (input, context) => {
    const headers = sharedHeaders("CreateGroup");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateIdentityProviderCommand = async (input, context) => {
    const headers = sharedHeaders("CreateIdentityProvider");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateResourceServerCommand = async (input, context) => {
    const headers = sharedHeaders("CreateResourceServer");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateUserImportJobCommand = async (input, context) => {
    const headers = sharedHeaders("CreateUserImportJob");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateUserPoolCommand = async (input, context) => {
    const headers = sharedHeaders("CreateUserPool");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateUserPoolClientCommand = async (input, context) => {
    const headers = sharedHeaders("CreateUserPoolClient");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateUserPoolDomainCommand = async (input, context) => {
    const headers = sharedHeaders("CreateUserPoolDomain");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteGroupCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteGroup");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteIdentityProviderCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteIdentityProvider");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteResourceServerCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteResourceServer");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteUserCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteUser");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteUserAttributesCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteUserAttributes");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteUserPoolCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteUserPool");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteUserPoolClientCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteUserPoolClient");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteUserPoolDomainCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteUserPoolDomain");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeIdentityProviderCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeIdentityProvider");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeResourceServerCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeResourceServer");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeRiskConfigurationCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeRiskConfiguration");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeUserImportJobCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeUserImportJob");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeUserPoolCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeUserPool");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeUserPoolClientCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeUserPoolClient");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeUserPoolDomainCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeUserPoolDomain");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ForgetDeviceCommand = async (input, context) => {
    const headers = sharedHeaders("ForgetDevice");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ForgotPasswordCommand = async (input, context) => {
    const headers = sharedHeaders("ForgotPassword");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetCSVHeaderCommand = async (input, context) => {
    const headers = sharedHeaders("GetCSVHeader");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetDeviceCommand = async (input, context) => {
    const headers = sharedHeaders("GetDevice");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetGroupCommand = async (input, context) => {
    const headers = sharedHeaders("GetGroup");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetIdentityProviderByIdentifierCommand = async (input, context) => {
    const headers = sharedHeaders("GetIdentityProviderByIdentifier");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetLogDeliveryConfigurationCommand = async (input, context) => {
    const headers = sharedHeaders("GetLogDeliveryConfiguration");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetSigningCertificateCommand = async (input, context) => {
    const headers = sharedHeaders("GetSigningCertificate");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetUICustomizationCommand = async (input, context) => {
    const headers = sharedHeaders("GetUICustomization");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetUserCommand = async (input, context) => {
    const headers = sharedHeaders("GetUser");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetUserAttributeVerificationCodeCommand = async (input, context) => {
    const headers = sharedHeaders("GetUserAttributeVerificationCode");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetUserPoolMfaConfigCommand = async (input, context) => {
    const headers = sharedHeaders("GetUserPoolMfaConfig");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GlobalSignOutCommand = async (input, context) => {
    const headers = sharedHeaders("GlobalSignOut");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_InitiateAuthCommand = async (input, context) => {
    const headers = sharedHeaders("InitiateAuth");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListDevicesCommand = async (input, context) => {
    const headers = sharedHeaders("ListDevices");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListGroupsCommand = async (input, context) => {
    const headers = sharedHeaders("ListGroups");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListIdentityProvidersCommand = async (input, context) => {
    const headers = sharedHeaders("ListIdentityProviders");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListResourceServersCommand = async (input, context) => {
    const headers = sharedHeaders("ListResourceServers");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListTagsForResourceCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForResource");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListUserImportJobsCommand = async (input, context) => {
    const headers = sharedHeaders("ListUserImportJobs");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListUserPoolClientsCommand = async (input, context) => {
    const headers = sharedHeaders("ListUserPoolClients");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListUserPoolsCommand = async (input, context) => {
    const headers = sharedHeaders("ListUserPools");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListUsersCommand = async (input, context) => {
    const headers = sharedHeaders("ListUsers");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListUsersInGroupCommand = async (input, context) => {
    const headers = sharedHeaders("ListUsersInGroup");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ResendConfirmationCodeCommand = async (input, context) => {
    const headers = sharedHeaders("ResendConfirmationCode");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_RespondToAuthChallengeCommand = async (input, context) => {
    const headers = sharedHeaders("RespondToAuthChallenge");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_RevokeTokenCommand = async (input, context) => {
    const headers = sharedHeaders("RevokeToken");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_SetLogDeliveryConfigurationCommand = async (input, context) => {
    const headers = sharedHeaders("SetLogDeliveryConfiguration");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_SetRiskConfigurationCommand = async (input, context) => {
    const headers = sharedHeaders("SetRiskConfiguration");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_SetUICustomizationCommand = async (input, context) => {
    const headers = sharedHeaders("SetUICustomization");
    let body;
    body = JSON.stringify(se_SetUICustomizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_SetUserMFAPreferenceCommand = async (input, context) => {
    const headers = sharedHeaders("SetUserMFAPreference");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_SetUserPoolMfaConfigCommand = async (input, context) => {
    const headers = sharedHeaders("SetUserPoolMfaConfig");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_SetUserSettingsCommand = async (input, context) => {
    const headers = sharedHeaders("SetUserSettings");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_SignUpCommand = async (input, context) => {
    const headers = sharedHeaders("SignUp");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_StartUserImportJobCommand = async (input, context) => {
    const headers = sharedHeaders("StartUserImportJob");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_StopUserImportJobCommand = async (input, context) => {
    const headers = sharedHeaders("StopUserImportJob");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_TagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("TagResource");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UntagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("UntagResource");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateAuthEventFeedbackCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateAuthEventFeedback");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateDeviceStatusCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateDeviceStatus");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateGroupCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateGroup");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateIdentityProviderCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateIdentityProvider");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateResourceServerCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateResourceServer");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateUserAttributesCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateUserAttributes");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateUserPoolCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateUserPool");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateUserPoolClientCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateUserPoolClient");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateUserPoolDomainCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateUserPoolDomain");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_VerifySoftwareTokenCommand = async (input, context) => {
    const headers = sharedHeaders("VerifySoftwareToken");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_VerifyUserAttributeCommand = async (input, context) => {
    const headers = sharedHeaders("VerifyUserAttribute");
    let body;
    body = JSON.stringify((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const de_AddCustomAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminAddUserToGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_AdminConfirmSignUpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminCreateUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_AdminCreateUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminDeleteUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_AdminDeleteUserAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminDisableProviderForUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminDisableUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminEnableUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminForgetDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_AdminGetDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_AdminGetDeviceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminGetUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_AdminGetUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminInitiateAuthCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminLinkProviderForUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminListDevicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_AdminListDevicesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminListGroupsForUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_AdminListGroupsForUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminListUserAuthEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_AdminListUserAuthEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminRemoveUserFromGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_AdminResetUserPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminRespondToAuthChallengeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminSetUserMFAPreferenceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminSetUserPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminSetUserSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminUpdateAuthEventFeedbackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminUpdateDeviceStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminUpdateUserAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AdminUserGlobalSignOutCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AssociateSoftwareTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ChangePasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ConfirmDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ConfirmForgotPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ConfirmSignUpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_CreateGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateIdentityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_CreateIdentityProviderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateResourceServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateUserImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_CreateUserImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateUserPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_CreateUserPoolResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateUserPoolClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_CreateUserPoolClientResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateUserPoolDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteIdentityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteResourceServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteUserAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteUserPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteUserPoolClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteUserPoolDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeIdentityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_DescribeIdentityProviderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeResourceServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeRiskConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_DescribeRiskConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeUserImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_DescribeUserImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeUserPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_DescribeUserPoolResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeUserPoolClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_DescribeUserPoolClientResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeUserPoolDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ForgetDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_ForgotPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetCSVHeaderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_GetDeviceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_GetGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetIdentityProviderByIdentifierCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_GetIdentityProviderByIdentifierResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetLogDeliveryConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetSigningCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetUICustomizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_GetUICustomizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetUserAttributeVerificationCodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetUserPoolMfaConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GlobalSignOutCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_InitiateAuthCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListDevicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_ListDevicesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_ListGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListIdentityProvidersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_ListIdentityProvidersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListResourceServersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListUserImportJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_ListUserImportJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListUserPoolClientsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListUserPoolsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_ListUserPoolsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListUsersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_ListUsersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListUsersInGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_ListUsersInGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ResendConfirmationCodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_RespondToAuthChallengeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_RevokeTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_SetLogDeliveryConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_SetRiskConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_SetRiskConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_SetUICustomizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_SetUICustomizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_SetUserMFAPreferenceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_SetUserPoolMfaConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_SetUserSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_SignUpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_StartUserImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_StartUserImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_StopUserImportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_StopUserImportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateAuthEventFeedbackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateDeviceStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_UpdateGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateIdentityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_UpdateIdentityProviderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateResourceServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateUserAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateUserPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateUserPoolClientCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = de_UpdateUserPoolClientResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateUserPoolDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_VerifySoftwareTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_VerifyUserAttributeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonBody)(output.body, context);
    let contents = {};
    contents = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.parseJsonErrorBody)(output.body, context),
    };
    const errorCode = (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_2__.loadRestJsonErrorCode)(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UserImportInProgressException":
        case "com.amazonaws.cognitoidentityprovider#UserImportInProgressException":
            throw await de_UserImportInProgressExceptionRes(parsedOutput, context);
        case "UserNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
            throw await de_UserNotFoundExceptionRes(parsedOutput, context);
        case "InvalidLambdaResponseException":
        case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
            throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "TooManyFailedAttemptsException":
        case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException":
            throw await de_TooManyFailedAttemptsExceptionRes(parsedOutput, context);
        case "UnexpectedLambdaException":
        case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
            throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
        case "UserLambdaValidationException":
        case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
            throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
        case "CodeDeliveryFailureException":
        case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
            throw await de_CodeDeliveryFailureExceptionRes(parsedOutput, context);
        case "InvalidPasswordException":
        case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
            throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
        case "InvalidSmsRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
            throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
        case "InvalidSmsRoleTrustRelationshipException":
        case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
            throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
        case "PreconditionNotMetException":
        case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":
            throw await de_PreconditionNotMetExceptionRes(parsedOutput, context);
        case "UnsupportedUserStateException":
        case "com.amazonaws.cognitoidentityprovider#UnsupportedUserStateException":
            throw await de_UnsupportedUserStateExceptionRes(parsedOutput, context);
        case "UsernameExistsException":
        case "com.amazonaws.cognitoidentityprovider#UsernameExistsException":
            throw await de_UsernameExistsExceptionRes(parsedOutput, context);
        case "AliasExistsException":
        case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
            throw await de_AliasExistsExceptionRes(parsedOutput, context);
        case "InvalidUserPoolConfigurationException":
        case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
            throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
        case "InvalidEmailRoleAccessPolicyException":
        case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
            throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
        case "MFAMethodNotFoundException":
        case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException":
            throw await de_MFAMethodNotFoundExceptionRes(parsedOutput, context);
        case "PasswordResetRequiredException":
        case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
            throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
        case "UserNotConfirmedException":
        case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
            throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
        case "UserPoolAddOnNotEnabledException":
        case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
            throw await de_UserPoolAddOnNotEnabledExceptionRes(parsedOutput, context);
        case "CodeMismatchException":
        case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
            throw await de_CodeMismatchExceptionRes(parsedOutput, context);
        case "ExpiredCodeException":
        case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
            throw await de_ExpiredCodeExceptionRes(parsedOutput, context);
        case "PasswordHistoryPolicyViolationException":
        case "com.amazonaws.cognitoidentityprovider#PasswordHistoryPolicyViolationException":
            throw await de_PasswordHistoryPolicyViolationExceptionRes(parsedOutput, context);
        case "SoftwareTokenMFANotFoundException":
        case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":
            throw await de_SoftwareTokenMFANotFoundExceptionRes(parsedOutput, context);
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "ForbiddenException":
        case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
            throw await de_ForbiddenExceptionRes(parsedOutput, context);
        case "GroupExistsException":
        case "com.amazonaws.cognitoidentityprovider#GroupExistsException":
            throw await de_GroupExistsExceptionRes(parsedOutput, context);
        case "DuplicateProviderException":
        case "com.amazonaws.cognitoidentityprovider#DuplicateProviderException":
            throw await de_DuplicateProviderExceptionRes(parsedOutput, context);
        case "UserPoolTaggingException":
        case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException":
            throw await de_UserPoolTaggingExceptionRes(parsedOutput, context);
        case "InvalidOAuthFlowException":
        case "com.amazonaws.cognitoidentityprovider#InvalidOAuthFlowException":
            throw await de_InvalidOAuthFlowExceptionRes(parsedOutput, context);
        case "ScopeDoesNotExistException":
        case "com.amazonaws.cognitoidentityprovider#ScopeDoesNotExistException":
            throw await de_ScopeDoesNotExistExceptionRes(parsedOutput, context);
        case "UnsupportedIdentityProviderException":
        case "com.amazonaws.cognitoidentityprovider#UnsupportedIdentityProviderException":
            throw await de_UnsupportedIdentityProviderExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.cognitoidentityprovider#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        case "UnsupportedOperationException":
        case "com.amazonaws.cognitoidentityprovider#UnsupportedOperationException":
            throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
        case "UnsupportedTokenTypeException":
        case "com.amazonaws.cognitoidentityprovider#UnsupportedTokenTypeException":
            throw await de_UnsupportedTokenTypeExceptionRes(parsedOutput, context);
        case "EnableSoftwareTokenMFAException":
        case "com.amazonaws.cognitoidentityprovider#EnableSoftwareTokenMFAException":
            throw await de_EnableSoftwareTokenMFAExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_AliasExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.AliasExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_CodeDeliveryFailureExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.CodeDeliveryFailureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_CodeMismatchExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.CodeMismatchException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_ConcurrentModificationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_DuplicateProviderExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.DuplicateProviderException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_EnableSoftwareTokenMFAExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_1__WEBPACK_IMPORTED_MODULE_4__.EnableSoftwareTokenMFAException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_ExpiredCodeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.ExpiredCodeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_ForbiddenExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.ForbiddenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_GroupExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.GroupExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InternalErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InternalErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidEmailRoleAccessPolicyExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidEmailRoleAccessPolicyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidLambdaResponseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidLambdaResponseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidOAuthFlowExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidOAuthFlowException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidParameterExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidParameterException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidPasswordExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidPasswordException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidSmsRoleAccessPolicyExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidSmsRoleAccessPolicyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidSmsRoleTrustRelationshipExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidSmsRoleTrustRelationshipException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidUserPoolConfigurationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidUserPoolConfigurationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_MFAMethodNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.MFAMethodNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_NotAuthorizedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.NotAuthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_PasswordHistoryPolicyViolationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.PasswordHistoryPolicyViolationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_PasswordResetRequiredExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.PasswordResetRequiredException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_PreconditionNotMetExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.PreconditionNotMetException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_ScopeDoesNotExistExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.ScopeDoesNotExistException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_SoftwareTokenMFANotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.SoftwareTokenMFANotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_TooManyFailedAttemptsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.TooManyFailedAttemptsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UnauthorizedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_1__WEBPACK_IMPORTED_MODULE_4__.UnauthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UnexpectedLambdaExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UnexpectedLambdaException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UnsupportedIdentityProviderExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UnsupportedIdentityProviderException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UnsupportedOperationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_1__WEBPACK_IMPORTED_MODULE_4__.UnsupportedOperationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UnsupportedTokenTypeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_1__WEBPACK_IMPORTED_MODULE_4__.UnsupportedTokenTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UnsupportedUserStateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UnsupportedUserStateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UserImportInProgressExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UserImportInProgressException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UserLambdaValidationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UserLambdaValidationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UsernameExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UsernameExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UserNotConfirmedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UserNotConfirmedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UserNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UserNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UserPoolAddOnNotEnabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UserPoolAddOnNotEnabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_UserPoolTaggingExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UserPoolTaggingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const se_SetUICustomizationRequest = (input, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        CSS: [],
        ClientId: [],
        ImageFile: context.base64Encoder,
        UserPoolId: [],
    });
};
const de_AdminCreateUserResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        User: (_) => de_UserType(_, context),
    });
};
const de_AdminGetDeviceResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Device: (_) => de_DeviceType(_, context),
    });
};
const de_AdminGetUserResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Enabled: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectBoolean,
        MFAOptions: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        PreferredMfaSetting: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        UserAttributes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        UserCreateDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        UserLastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        UserMFASettingList: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        UserStatus: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_AdminListDevicesResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Devices: (_) => de_DeviceListType(_, context),
        PaginationToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_AdminListGroupsForUserResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Groups: (_) => de_GroupListType(_, context),
        NextToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_AdminListUserAuthEventsResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        AuthEvents: (_) => de_AuthEventsType(_, context),
        NextToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_AuthEventsType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AuthEventType(entry, context);
    });
    return retVal;
};
const de_AuthEventType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        ChallengeResponses: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        CreationDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        EventContextData: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        EventFeedback: (_) => de_EventFeedbackType(_, context),
        EventId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        EventResponse: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        EventRisk: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        EventType: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_CreateGroupResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Group: (_) => de_GroupType(_, context),
    });
};
const de_CreateIdentityProviderResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        IdentityProvider: (_) => de_IdentityProviderType(_, context),
    });
};
const de_CreateUserImportJobResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UserImportJob: (_) => de_UserImportJobType(_, context),
    });
};
const de_CreateUserPoolClientResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UserPoolClient: (_) => de_UserPoolClientType(_, context),
    });
};
const de_CreateUserPoolResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UserPool: (_) => de_UserPoolType(_, context),
    });
};
const de_DescribeIdentityProviderResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        IdentityProvider: (_) => de_IdentityProviderType(_, context),
    });
};
const de_DescribeRiskConfigurationResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        RiskConfiguration: (_) => de_RiskConfigurationType(_, context),
    });
};
const de_DescribeUserImportJobResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UserImportJob: (_) => de_UserImportJobType(_, context),
    });
};
const de_DescribeUserPoolClientResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UserPoolClient: (_) => de_UserPoolClientType(_, context),
    });
};
const de_DescribeUserPoolResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UserPool: (_) => de_UserPoolType(_, context),
    });
};
const de_DeviceListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_DeviceType(entry, context);
    });
    return retVal;
};
const de_DeviceType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        DeviceAttributes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        DeviceCreateDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        DeviceKey: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        DeviceLastAuthenticatedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        DeviceLastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
    });
};
const de_EventFeedbackType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        FeedbackDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        FeedbackValue: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Provider: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_GetDeviceResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Device: (_) => de_DeviceType(_, context),
    });
};
const de_GetGroupResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Group: (_) => de_GroupType(_, context),
    });
};
const de_GetIdentityProviderByIdentifierResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        IdentityProvider: (_) => de_IdentityProviderType(_, context),
    });
};
const de_GetUICustomizationResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UICustomization: (_) => de_UICustomizationType(_, context),
    });
};
const de_GroupListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_GroupType(entry, context);
    });
    return retVal;
};
const de_GroupType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        CreationDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        Description: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        GroupName: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        LastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        Precedence: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        RoleArn: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        UserPoolId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_IdentityProviderType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        AttributeMapping: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        CreationDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        IdpIdentifiers: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        LastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        ProviderDetails: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        ProviderName: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        ProviderType: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        UserPoolId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_ListDevicesResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Devices: (_) => de_DeviceListType(_, context),
        PaginationToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_ListGroupsResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Groups: (_) => de_GroupListType(_, context),
        NextToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_ListIdentityProvidersResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        NextToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Providers: (_) => de_ProvidersListType(_, context),
    });
};
const de_ListUserImportJobsResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        PaginationToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        UserImportJobs: (_) => de_UserImportJobsListType(_, context),
    });
};
const de_ListUserPoolsResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        NextToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        UserPools: (_) => de_UserPoolListType(_, context),
    });
};
const de_ListUsersInGroupResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        NextToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Users: (_) => de_UsersListType(_, context),
    });
};
const de_ListUsersResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        PaginationToken: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Users: (_) => de_UsersListType(_, context),
    });
};
const de_ProviderDescription = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        CreationDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        LastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        ProviderName: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        ProviderType: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_ProvidersListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ProviderDescription(entry, context);
    });
    return retVal;
};
const de_RiskConfigurationType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        AccountTakeoverRiskConfiguration: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        CompromisedCredentialsRiskConfiguration: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        LastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        RiskExceptionConfiguration: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        UserPoolId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_SetRiskConfigurationResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        RiskConfiguration: (_) => de_RiskConfigurationType(_, context),
    });
};
const de_SetUICustomizationResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UICustomization: (_) => de_UICustomizationType(_, context),
    });
};
const de_StartUserImportJobResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UserImportJob: (_) => de_UserImportJobType(_, context),
    });
};
const de_StopUserImportJobResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UserImportJob: (_) => de_UserImportJobType(_, context),
    });
};
const de_UICustomizationType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        CSS: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        CSSVersion: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        CreationDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        ImageUrl: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        LastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        UserPoolId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_UpdateGroupResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Group: (_) => de_GroupType(_, context),
    });
};
const de_UpdateIdentityProviderResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        IdentityProvider: (_) => de_IdentityProviderType(_, context),
    });
};
const de_UpdateUserPoolClientResponse = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        UserPoolClient: (_) => de_UserPoolClientType(_, context),
    });
};
const de_UserImportJobsListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_UserImportJobType(entry, context);
    });
    return retVal;
};
const de_UserImportJobType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        CloudWatchLogsRoleArn: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        CompletionDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        CompletionMessage: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        CreationDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        FailedUsers: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectLong,
        ImportedUsers: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectLong,
        JobId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        JobName: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        PreSignedUrl: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        SkippedUsers: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectLong,
        StartDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        Status: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        UserPoolId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_UserPoolClientType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        AccessTokenValidity: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        AllowedOAuthFlows: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        AllowedOAuthFlowsUserPoolClient: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectBoolean,
        AllowedOAuthScopes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        AnalyticsConfiguration: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        AuthSessionValidity: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        CallbackURLs: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        ClientId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        ClientName: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        ClientSecret: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        CreationDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        DefaultRedirectURI: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        EnablePropagateAdditionalUserContextData: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectBoolean,
        EnableTokenRevocation: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectBoolean,
        ExplicitAuthFlows: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        IdTokenValidity: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        LastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        LogoutURLs: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        PreventUserExistenceErrors: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        ReadAttributes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        RefreshTokenValidity: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        SupportedIdentityProviders: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        TokenValidityUnits: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        UserPoolId: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        WriteAttributes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
    });
};
const de_UserPoolDescriptionType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        CreationDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        Id: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        LambdaConfig: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        LastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        Name: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Status: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_UserPoolListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_UserPoolDescriptionType(entry, context);
    });
    return retVal;
};
const de_UserPoolType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        AccountRecoverySetting: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        AdminCreateUserConfig: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        AliasAttributes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        Arn: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        AutoVerifiedAttributes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        CreationDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        CustomDomain: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        DeletionProtection: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        DeviceConfiguration: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        Domain: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        EmailConfiguration: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        EmailConfigurationFailure: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        EmailVerificationMessage: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        EmailVerificationSubject: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        EstimatedNumberOfUsers: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        Id: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        LambdaConfig: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        LastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        MfaConfiguration: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Name: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Policies: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        SchemaAttributes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        SmsAuthenticationMessage: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        SmsConfiguration: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        SmsConfigurationFailure: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        SmsVerificationMessage: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Status: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        UserAttributeUpdateSettings: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        UserPoolAddOns: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        UserPoolTags: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        UsernameAttributes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        UsernameConfiguration: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        VerificationMessageTemplate: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
    });
};
const de_UsersListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_UserType(entry, context);
    });
    return retVal;
};
const de_UserType = (output, context) => {
    return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Attributes: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        Enabled: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectBoolean,
        MFAOptions: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        UserCreateDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        UserLastModifiedDate: (_) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        UserStatus: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Username: _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.withBaseException)(_models_CognitoIdentityProviderServiceException__WEBPACK_IMPORTED_MODULE_5__.CognitoIdentityProviderServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest(contents);
};
function sharedHeaders(operation) {
    return {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": `AWSCognitoIdentityProviderService.${operation}`,
    };
}


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeConfig.browser.js":
/*!***************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeConfig.browser.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../package.json */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/package.json");
/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/sha256-browser */ "../nodejs/files/node_modules/@aws-crypto/sha256-browser/build/module/index.js");
/* harmony import */ var _aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-user-agent-browser */ "../nodejs/files/node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js");
/* harmony import */ var _smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/config-resolver */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/index.js");
/* harmony import */ var _smithy_fetch_http_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/fetch-http-handler */ "../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/index.js");
/* harmony import */ var _smithy_invalid_dependency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smithy/invalid-dependency */ "../nodejs/files/node_modules/@smithy/invalid-dependency/dist-es/index.js");
/* harmony import */ var _smithy_util_body_length_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smithy/util-body-length-browser */ "../nodejs/files/node_modules/@smithy/util-body-length-browser/dist-es/index.js");
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smithy/util-retry */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/index.js");
/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./runtimeConfig.shared */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeConfig.shared.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _smithy_util_defaults_mode_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smithy/util-defaults-mode-browser */ "../nodejs/files/node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js");











const getRuntimeConfig = (config) => {
    const defaultsMode = (0,_smithy_util_defaults_mode_browser__WEBPACK_IMPORTED_MODULE_8__.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_7__.loadConfigsForDefaultMode);
    const clientSharedValues = (0,_runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_9__.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "browser",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? _smithy_util_body_length_browser__WEBPACK_IMPORTED_MODULE_5__.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,_aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_1__.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_10__.version }),
        maxAttempts: config?.maxAttempts ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_MAX_ATTEMPTS,
        region: config?.region ?? (0,_smithy_invalid_dependency__WEBPACK_IMPORTED_MODULE_4__.invalidProvider)("Region is missing"),
        requestHandler: _smithy_fetch_http_handler__WEBPACK_IMPORTED_MODULE_3__.FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || _smithy_util_retry__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_RETRY_MODE),
        sha256: config?.sha256 ?? _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__.Sha256,
        streamCollector: config?.streamCollector ?? _smithy_fetch_http_handler__WEBPACK_IMPORTED_MODULE_3__.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_USE_DUALSTACK_ENDPOINT)),
        useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(_smithy_config_resolver__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_USE_FIPS_ENDPOINT)),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeConfig.shared.js":
/*!**************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeConfig.shared.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuntimeConfig: () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/core */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js");
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core */ "../nodejs/files/node_modules/@smithy/core/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _smithy_url_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/url-parser */ "../nodejs/files/node_modules/@smithy/url-parser/dist-es/index.js");
/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-base64 */ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/index.js");
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smithy/util-utf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/index.js");
/* harmony import */ var _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/httpAuthSchemeProvider */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/auth/httpAuthSchemeProvider.js");
/* harmony import */ var _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endpoint/endpointResolver */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/endpoint/endpointResolver.js");








const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2016-04-18",
        base64Decoder: config?.base64Decoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__.fromBase64,
        base64Encoder: config?.base64Encoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_3__.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_5__.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? _auth_httpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_6__.defaultCognitoIdentityProviderHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new _aws_sdk_core__WEBPACK_IMPORTED_MODULE_7__.AwsSdkSigV4Signer(),
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                signer: new _smithy_core__WEBPACK_IMPORTED_MODULE_0__.NoAuthSigner(),
            },
        ],
        logger: config?.logger ?? new _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_1__.NoOpLogger(),
        serviceId: config?.serviceId ?? "Cognito Identity Provider",
        urlParser: config?.urlParser ?? _smithy_url_parser__WEBPACK_IMPORTED_MODULE_2__.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_4__.toUtf8,
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeExtensions.js":
/*!***********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/runtimeExtensions.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRuntimeExtensions: () => (/* binding */ resolveRuntimeExtensions)
/* harmony export */ });
/* harmony import */ var _aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/region-config-resolver */ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/index.js");
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/httpAuthExtensionConfiguration */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/auth/httpAuthExtensionConfiguration.js");




const asPartial = (t) => t;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial((0,_aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0,_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.getHttpHandlerExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0,_auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__.getHttpAuthExtensionConfiguration)(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...(0,_aws_sdk_region_config_resolver__WEBPACK_IMPORTED_MODULE_0__.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0,_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
        ...(0,_auth_httpAuthExtensionConfiguration__WEBPACK_IMPORTED_MODULE_3__.resolveHttpAuthRuntimeConfig)(extensionConfiguration),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js":
/*!****************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCredentialFeature: () => (/* binding */ setCredentialFeature)
/* harmony export */ });
function setCredentialFeature(credentials, feature, value) {
    if (!credentials.$source) {
        credentials.$source = {};
    }
    credentials.$source[feature] = value;
    return credentials;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setFeature: () => (/* binding */ setFeature)
/* harmony export */ });
function setFeature(context, feature, value) {
    if (!context.__aws_sdk_context) {
        context.__aws_sdk_context = {
            features: {},
        };
    }
    else if (!context.__aws_sdk_context.features) {
        context.__aws_sdk_context.features = {};
    }
    context.__aws_sdk_context.features[feature] = value;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js":
/*!******************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AWSSDKSigV4Signer: () => (/* binding */ AWSSDKSigV4Signer),
/* harmony export */   AwsSdkSigV4Signer: () => (/* binding */ AwsSdkSigV4Signer),
/* harmony export */   validateSigningProperties: () => (/* binding */ validateSigningProperties)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js");


const throwSigningPropertyError = (name, property) => {
    if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
    }
    return property;
};
const validateSigningProperties = async (signingProperties) => {
    const context = throwSigningPropertyError("context", signingProperties.context);
    const config = throwSigningPropertyError("config", signingProperties.config);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const signerFunction = throwSigningPropertyError("signer", config.signer);
    const signer = await signerFunction(authScheme);
    const signingRegion = signingProperties?.signingRegion;
    const signingRegionSet = signingProperties?.signingRegionSet;
    const signingName = signingProperties?.signingName;
    return {
        config,
        signer,
        signingRegion,
        signingRegionSet,
        signingName,
    };
};
class AwsSdkSigV4Signer {
    async sign(httpRequest, identity, signingProperties) {
        if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(httpRequest)) {
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const validatedProps = await validateSigningProperties(signingProperties);
        const { config, signer } = validatedProps;
        let { signingRegion, signingName } = validatedProps;
        const handlerExecutionContext = signingProperties.context;
        if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
            const [first, second] = handlerExecutionContext.authSchemes;
            if (first?.name === "sigv4a" && second?.name === "sigv4") {
                signingRegion = second?.signingRegion ?? signingRegion;
                signingName = second?.signingName ?? signingName;
            }
        }
        const signedRequest = await signer.sign(httpRequest, {
            signingDate: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSkewCorrectedDate)(config.systemClockOffset),
            signingRegion: signingRegion,
            signingService: signingName,
        });
        return signedRequest;
    }
    errorHandler(signingProperties) {
        return (error) => {
            const serverTime = error.ServerTime ?? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDateHeader)(error.$response);
            if (serverTime) {
                const config = throwSigningPropertyError("config", signingProperties.config);
                const initialSystemClockOffset = config.systemClockOffset;
                config.systemClockOffset = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getUpdatedSystemClockOffset)(serverTime, config.systemClockOffset);
                const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
                if (clockSkewCorrected && error.$metadata) {
                    error.$metadata.clockSkewCorrected = true;
                }
            }
            throw error;
        };
    }
    successHandler(httpResponse, signingProperties) {
        const dateHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDateHeader)(httpResponse);
        if (dateHeader) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            config.systemClockOffset = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getUpdatedSystemClockOffset)(dateHeader, config.systemClockOffset);
        }
    }
}
const AWSSDKSigV4Signer = AwsSdkSigV4Signer;


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js":
/*!*************************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveAWSSDKSigV4Config: () => (/* binding */ resolveAWSSDKSigV4Config),
/* harmony export */   resolveAwsSdkSigV4Config: () => (/* binding */ resolveAwsSdkSigV4Config)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/core/client */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js");
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core */ "../nodejs/files/node_modules/@smithy/core/dist-es/index.js");
/* harmony import */ var _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/signature-v4 */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/index.js");



const resolveAwsSdkSigV4Config = (config) => {
    let isUserSupplied = false;
    let normalizedCreds;
    if (config.credentials) {
        isUserSupplied = true;
        normalizedCreds = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.memoizeIdentityProvider)(config.credentials, _smithy_core__WEBPACK_IMPORTED_MODULE_0__.isIdentityExpired, _smithy_core__WEBPACK_IMPORTED_MODULE_0__.doesIdentityRequireRefresh);
    }
    if (!normalizedCreds) {
        if (config.credentialDefaultProvider) {
            normalizedCreds = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.credentialDefaultProvider(Object.assign({}, config, {
                parentClientConfig: config,
            })));
        }
        else {
            normalizedCreds = async () => {
                throw new Error("`credentials` is missing");
            };
        }
    }
    const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256, } = config;
    let signer;
    if (config.signer) {
        signer = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.signer);
    }
    else if (config.regionInfoProvider) {
        signer = () => (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.region)()
            .then(async (region) => [
            (await config.regionInfoProvider(region, {
                useFipsEndpoint: await config.useFipsEndpoint(),
                useDualstackEndpoint: await config.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            config.signingRegion = config.signingRegion || signingRegion || region;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
                ...config,
                credentials: normalizedCreds,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4;
            return new SignerCtor(params);
        });
    }
    else {
        signer = async (authScheme) => {
            authScheme = Object.assign({}, {
                name: "sigv4",
                signingName: config.signingName || config.defaultSigningName,
                signingRegion: await (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(config.region)(),
                properties: {},
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            config.signingRegion = config.signingRegion || signingRegion;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
                ...config,
                credentials: normalizedCreds,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4;
            return new SignerCtor(params);
        };
    }
    return {
        ...config,
        systemClockOffset,
        signingEscapePath,
        credentials: isUserSupplied
            ? async () => normalizedCreds().then((creds) => (0,_aws_sdk_core_client__WEBPACK_IMPORTED_MODULE_2__.setCredentialFeature)(creds, "CREDENTIALS_CODE", "e"))
            : normalizedCreds,
        signer,
    };
};
const resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js":
/*!************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDateHeader: () => (/* binding */ getDateHeader)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");

const getDateHeader = (response) => _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js":
/*!*******************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSkewCorrectedDate: () => (/* binding */ getSkewCorrectedDate)
/* harmony export */ });
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js":
/*!**************************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUpdatedSystemClockOffset: () => (/* binding */ getUpdatedSystemClockOffset)
/* harmony export */ });
/* harmony import */ var _isClockSkewed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isClockSkewed */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js");

const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if ((0,_isClockSkewed__WEBPACK_IMPORTED_MODULE_0__.isClockSkewed)(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js":
/*!************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isClockSkewed: () => (/* binding */ isClockSkewed)
/* harmony export */ });
/* harmony import */ var _getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSkewCorrectedDate */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js");

const isClockSkewed = (clockTime, systemClockOffset) => Math.abs((0,_getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_0__.getSkewCorrectedDate)(systemClockOffset).getTime() - clockTime) >= 300000;


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectBodyString: () => (/* binding */ collectBodyString)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");

const collectBodyString = (streamBody, context) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js":
/*!*****************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadRestJsonErrorCode: () => (/* binding */ loadRestJsonErrorCode),
/* harmony export */   parseJsonBody: () => (/* binding */ parseJsonBody),
/* harmony export */   parseJsonErrorBody: () => (/* binding */ parseJsonErrorBody)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js");

const parseJsonBody = (streamBody, context) => (0,_common__WEBPACK_IMPORTED_MODULE_0__.collectBodyString)(streamBody, context).then((encoded) => {
    if (encoded.length) {
        try {
            return JSON.parse(encoded);
        }
        catch (e) {
            if (e?.name === "SyntaxError") {
                Object.defineProperty(e, "$responseBodyText", {
                    value: encoded,
                });
            }
            throw e;
        }
    }
    return {};
});
const parseJsonErrorBody = async (errorBody, context) => {
    const value = await parseJsonBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHostHeaderPlugin: () => (/* binding */ getHostHeaderPlugin),
/* harmony export */   hostHeaderMiddleware: () => (/* binding */ hostHeaderMiddleware),
/* harmony export */   hostHeaderMiddlewareOptions: () => (/* binding */ hostHeaderMiddlewareOptions),
/* harmony export */   resolveHostHeaderConfig: () => (/* binding */ resolveHostHeaderConfig)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");

function resolveHostHeaderConfig(input) {
    return input;
}
const hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(args.request))
        return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
    }
    else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null)
            host += `:${request.port}`;
        request.headers["host"] = host;
    }
    return next(args);
};
const hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
const getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    },
});


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/middleware-logger/dist-es/index.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/middleware-logger/dist-es/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoggerPlugin: () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.getLoggerPlugin),
/* harmony export */   loggerMiddleware: () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.loggerMiddleware),
/* harmony export */   loggerMiddlewareOptions: () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.loggerMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loggerMiddleware */ "../nodejs/files/node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoggerPlugin: () => (/* binding */ getLoggerPlugin),
/* harmony export */   loggerMiddleware: () => (/* binding */ loggerMiddleware),
/* harmony export */   loggerMiddlewareOptions: () => (/* binding */ loggerMiddlewareOptions)
/* harmony export */ });
const loggerMiddleware = () => (next, context) => async (args) => {
    try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
        });
        return response;
    }
    catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata,
        });
        throw error;
    }
};
const loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
});


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRecursionDetectionMiddlewareOptions: () => (/* binding */ addRecursionDetectionMiddlewareOptions),
/* harmony export */   getRecursionDetectionPlugin: () => (/* binding */ getRecursionDetectionPlugin),
/* harmony export */   recursionDetectionMiddleware: () => (/* binding */ recursionDetectionMiddleware)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");

const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = (options) => (next) => async (args) => {
    const { request } = args;
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request) ||
        options.runtime !== "node" ||
        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
        ...args,
        request,
    });
};
const addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low",
};
const getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
    },
});


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkFeatures: () => (/* binding */ checkFeatures)
/* harmony export */ });
/* harmony import */ var _aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/core */ "../nodejs/files/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js");

const ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
async function checkFeatures(context, config, args) {
    const request = args.request;
    if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
        (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, "PROTOCOL_RPC_V2_CBOR", "M");
    }
    if (typeof config.retryStrategy === "function") {
        const retryStrategy = await config.retryStrategy();
        if (typeof retryStrategy.acquireInitialRetryToken === "function") {
            if (retryStrategy.constructor?.name?.includes("Adaptive")) {
                (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, "RETRY_MODE_ADAPTIVE", "F");
            }
            else {
                (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, "RETRY_MODE_STANDARD", "E");
            }
        }
        else {
            (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, "RETRY_MODE_LEGACY", "D");
        }
    }
    if (typeof config.accountIdEndpointMode === "function") {
        const endpointV2 = context.endpointV2;
        if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
            (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, "ACCOUNT_ID_ENDPOINT", "O");
        }
        switch (await config.accountIdEndpointMode?.()) {
            case "disabled":
                (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
                break;
            case "preferred":
                (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
                break;
            case "required":
                (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
                break;
        }
    }
    const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
    if (identity?.$source) {
        const credentials = identity;
        if (credentials.accountId) {
            (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, "RESOLVED_ACCOUNT_ID", "T");
        }
        for (const [key, value] of Object.entries(credentials.$source ?? {})) {
            (0,_aws_sdk_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, key, value);
        }
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_UA_APP_ID: () => (/* binding */ DEFAULT_UA_APP_ID),
/* harmony export */   resolveUserAgentConfig: () => (/* binding */ resolveUserAgentConfig)
/* harmony export */ });
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core */ "../nodejs/files/node_modules/@smithy/core/dist-es/index.js");

const DEFAULT_UA_APP_ID = undefined;
function isValidUserAgentAppId(appId) {
    if (appId === undefined) {
        return true;
    }
    return typeof appId === "string" && appId.length <= 50;
}
function resolveUserAgentConfig(input) {
    const normalizedAppIdProvider = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
    return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
        userAgentAppId: async () => {
            const appId = await normalizedAppIdProvider();
            if (!isValidUserAgentAppId(appId)) {
                const logger = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
                if (typeof appId !== "string") {
                    logger?.warn("userAgentAppId must be a string or undefined.");
                }
                else if (appId.length > 50) {
                    logger?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
                }
            }
            return appId;
        },
    };
}


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPACE: () => (/* binding */ SPACE),
/* harmony export */   UA_ESCAPE_CHAR: () => (/* binding */ UA_ESCAPE_CHAR),
/* harmony export */   UA_NAME_ESCAPE_REGEX: () => (/* binding */ UA_NAME_ESCAPE_REGEX),
/* harmony export */   UA_NAME_SEPARATOR: () => (/* binding */ UA_NAME_SEPARATOR),
/* harmony export */   UA_VALUE_ESCAPE_REGEX: () => (/* binding */ UA_VALUE_ESCAPE_REGEX),
/* harmony export */   USER_AGENT: () => (/* binding */ USER_AGENT),
/* harmony export */   X_AMZ_USER_AGENT: () => (/* binding */ X_AMZ_USER_AGENT)
/* harmony export */ });
const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";
const SPACE = " ";
const UA_NAME_SEPARATOR = "/";
const UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
const UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
const UA_ESCAPE_CHAR = "-";


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeFeatures: () => (/* binding */ encodeFeatures)
/* harmony export */ });
const BYTE_LIMIT = 1024;
function encodeFeatures(features) {
    let buffer = "";
    for (const key in features) {
        const val = features[key];
        if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
            if (buffer.length) {
                buffer += "," + val;
            }
            else {
                buffer += val;
            }
            continue;
        }
        break;
    }
    return buffer;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_UA_APP_ID: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_UA_APP_ID),
/* harmony export */   getUserAgentMiddlewareOptions: () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.getUserAgentMiddlewareOptions),
/* harmony export */   getUserAgentPlugin: () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.getUserAgentPlugin),
/* harmony export */   resolveUserAgentConfig: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_0__.resolveUserAgentConfig),
/* harmony export */   userAgentMiddleware: () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.userAgentMiddleware)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurations */ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js");
/* harmony import */ var _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-agent-middleware */ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js":
/*!****************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserAgentMiddlewareOptions: () => (/* binding */ getUserAgentMiddlewareOptions),
/* harmony export */   getUserAgentPlugin: () => (/* binding */ getUserAgentPlugin),
/* harmony export */   userAgentMiddleware: () => (/* binding */ userAgentMiddleware)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-endpoints */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/index.js");
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _check_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-features */ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js");
/* harmony import */ var _encode_features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./encode-features */ "../nodejs/files/node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js");





const userAgentMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest.isInstance(request)) {
        return next(args);
    }
    const { headers } = request;
    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    await (0,_check_features__WEBPACK_IMPORTED_MODULE_2__.checkFeatures)(context, options, args);
    const awsContext = context;
    defaultUserAgent.push(`m/${(0,_encode_features__WEBPACK_IMPORTED_MODULE_4__.encodeFeatures)(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
    const appId = await options.userAgentAppId();
    if (appId) {
        defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
    }
    const prefix = (0,_aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.getUserAgentPrefix)();
    const sdkUserAgentValue = (prefix ? [prefix] : [])
        .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])
        .join(_constants__WEBPACK_IMPORTED_MODULE_3__.SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(_constants__WEBPACK_IMPORTED_MODULE_3__.SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[_constants__WEBPACK_IMPORTED_MODULE_3__.X_AMZ_USER_AGENT] = headers[_constants__WEBPACK_IMPORTED_MODULE_3__.X_AMZ_USER_AGENT]
                ? `${headers[_constants__WEBPACK_IMPORTED_MODULE_3__.USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[_constants__WEBPACK_IMPORTED_MODULE_3__.USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[_constants__WEBPACK_IMPORTED_MODULE_3__.X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
const escapeUserAgent = (userAgentPair) => {
    const name = userAgentPair[0]
        .split(_constants__WEBPACK_IMPORTED_MODULE_3__.UA_NAME_SEPARATOR)
        .map((part) => part.replace(_constants__WEBPACK_IMPORTED_MODULE_3__.UA_NAME_ESCAPE_REGEX, _constants__WEBPACK_IMPORTED_MODULE_3__.UA_ESCAPE_CHAR))
        .join(_constants__WEBPACK_IMPORTED_MODULE_3__.UA_NAME_SEPARATOR);
    const version = userAgentPair[1]?.replace(_constants__WEBPACK_IMPORTED_MODULE_3__.UA_VALUE_ESCAPE_REGEX, _constants__WEBPACK_IMPORTED_MODULE_3__.UA_ESCAPE_CHAR);
    const prefixSeparatorIndex = name.indexOf(_constants__WEBPACK_IMPORTED_MODULE_3__.UA_NAME_SEPARATOR);
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .reduce((acc, item, index) => {
        switch (index) {
            case 0:
                return item;
            case 1:
                return `${acc}/${item}`;
            default:
                return `${acc}#${item}`;
        }
    }, "");
};
const getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    },
});


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js":
/*!************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAwsRegionExtensionConfiguration: () => (/* binding */ getAwsRegionExtensionConfiguration),
/* harmony export */   resolveAwsRegionExtensionConfiguration: () => (/* binding */ resolveAwsRegionExtensionConfiguration)
/* harmony export */ });
const getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    let runtimeConfigRegion = async () => {
        if (runtimeConfig.region === undefined) {
            throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
            return region;
        }
        return region();
    };
    return {
        setRegion(region) {
            runtimeConfigRegion = region;
        },
        region() {
            return runtimeConfigRegion;
        },
    };
};
const resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
        region: awsRegionExtensionConfiguration.region(),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/index.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_INI_NAME),
/* harmony export */   getAwsRegionExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.getAwsRegionExtensionConfiguration),
/* harmony export */   resolveAwsRegionExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.resolveAwsRegionExtensionConfiguration),
/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions */ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js");
/* harmony import */ var _regionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regionConfig */ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js":
/*!***************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* binding */ REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* binding */ REGION_INI_NAME)
/* harmony export */ });
const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js":
/*!**********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRealRegion: () => (/* binding */ getRealRegion)
/* harmony export */ });
/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFipsRegion */ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js");

const getRealRegion = (region) => (0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_0__.isFipsRegion)(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js":
/*!**************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_INI_NAME),
/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js");
/* harmony import */ var _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveRegionConfig */ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js":
/*!*********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFipsRegion: () => (/* binding */ isFipsRegion)
/* harmony export */ });
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js":
/*!****************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRegionConfig: () => (/* binding */ resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _getRealRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRealRegion */ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js");
/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFipsRegion */ "../nodejs/files/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js");


const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(region);
            }
            const providedRegion = await region();
            return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if ((0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_1__.isFipsRegion)(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/aws.js":
/*!***************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/aws.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   awsEndpointFunctions: () => (/* binding */ awsEndpointFunctions)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/index.js");
/* harmony import */ var _lib_aws_isVirtualHostableS3Bucket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/aws/isVirtualHostableS3Bucket */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js");
/* harmony import */ var _lib_aws_parseArn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/aws/parseArn */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js");
/* harmony import */ var _lib_aws_partition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/aws/partition */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js");




const awsEndpointFunctions = {
    isVirtualHostableS3Bucket: _lib_aws_isVirtualHostableS3Bucket__WEBPACK_IMPORTED_MODULE_1__.isVirtualHostableS3Bucket,
    parseArn: _lib_aws_parseArn__WEBPACK_IMPORTED_MODULE_2__.parseArn,
    partition: _lib_aws_partition__WEBPACK_IMPORTED_MODULE_3__.partition,
};
_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions.aws = awsEndpointFunctions;


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/index.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.EndpointError),
/* harmony export */   awsEndpointFunctions: () => (/* reexport safe */ _aws__WEBPACK_IMPORTED_MODULE_0__.awsEndpointFunctions),
/* harmony export */   getUserAgentPrefix: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.getUserAgentPrefix),
/* harmony export */   isIpAddress: () => (/* reexport safe */ _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_2__.isIpAddress),
/* harmony export */   partition: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.partition),
/* harmony export */   resolveEndpoint: () => (/* reexport safe */ _resolveEndpoint__WEBPACK_IMPORTED_MODULE_3__.resolveEndpoint),
/* harmony export */   setPartitionInfo: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.setPartitionInfo),
/* harmony export */   useDefaultPartitionInfo: () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__.useDefaultPartitionInfo)
/* harmony export */ });
/* harmony import */ var _aws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aws */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/aws.js");
/* harmony import */ var _lib_aws_partition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/aws/partition */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js");
/* harmony import */ var _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/isIpAddress */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js");
/* harmony import */ var _resolveEndpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveEndpoint */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");







/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js":
/*!*********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVirtualHostableS3Bucket: () => (/* binding */ isVirtualHostableS3Bucket)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/index.js");
/* harmony import */ var _isIpAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isIpAddress */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js");


const isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
        for (const label of value.split(".")) {
            if (!isVirtualHostableS3Bucket(label)) {
                return false;
            }
        }
        return true;
    }
    if (!(0,_smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.isValidHostLabel)(value)) {
        return false;
    }
    if (value.length < 3 || value.length > 63) {
        return false;
    }
    if (value !== value.toLowerCase()) {
        return false;
    }
    if ((0,_isIpAddress__WEBPACK_IMPORTED_MODULE_1__.isIpAddress)(value)) {
        return false;
    }
    return true;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseArn: () => (/* binding */ parseArn)
/* harmony export */ });
const ARN_DELIMITER = ":";
const RESOURCE_DELIMITER = "/";
const parseArn = (value) => {
    const segments = value.split(ARN_DELIMITER);
    if (segments.length < 6)
        return null;
    const [arn, partition, service, region, accountId, ...resourcePath] = segments;
    if (arn !== "arn" || partition === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
        return null;
    const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
    return {
        partition,
        service,
        region,
        accountId,
        resourceId,
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserAgentPrefix: () => (/* binding */ getUserAgentPrefix),
/* harmony export */   partition: () => (/* binding */ partition),
/* harmony export */   setPartitionInfo: () => (/* binding */ setPartitionInfo),
/* harmony export */   useDefaultPartitionInfo: () => (/* binding */ useDefaultPartitionInfo)
/* harmony export */ });
/* harmony import */ var _partitions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partitions.json */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json");

let selectedPartitionsInfo = _partitions_json__WEBPACK_IMPORTED_MODULE_0__;
let selectedUserAgentPrefix = "";
const partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};
const setPartitionInfo = (partitionsInfo, userAgentPrefix = "") => {
    selectedPartitionsInfo = partitionsInfo;
    selectedUserAgentPrefix = userAgentPrefix;
};
const useDefaultPartitionInfo = () => {
    setPartitionInfo(_partitions_json__WEBPACK_IMPORTED_MODULE_0__, "");
};
const getUserAgentPrefix = () => selectedUserAgentPrefix;


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIpAddress: () => (/* reexport safe */ _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.isIpAddress)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/index.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveEndpoint: () => (/* reexport safe */ _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.resolveEndpoint)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/index.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* reexport safe */ _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.EndpointError)
/* harmony export */ });
/* harmony import */ var _smithy_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-endpoints */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/index.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js":
/*!************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js":
/*!********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js":
/*!***********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* reexport safe */ _EndpointError__WEBPACK_IMPORTED_MODULE_0__.EndpointError)
/* harmony export */ });
/* harmony import */ var _EndpointError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndpointError */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js");
/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EndpointRuleObject */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js");
/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorRuleObject */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js");
/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RuleSetObject */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js");
/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TreeRuleObject */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js");








/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-locate-window/dist-es/index.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-locate-window/dist-es/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locateWindow: () => (/* binding */ locateWindow)
/* harmony export */ });
const fallbackWindow = {};
function locateWindow() {
    if (typeof window !== "undefined") {
        return window;
    }
    else if (typeof self !== "undefined") {
        return self;
    }
    return fallbackWindow;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDefaultUserAgentProvider: () => (/* binding */ createDefaultUserAgentProvider),
/* harmony export */   defaultUserAgent: () => (/* binding */ defaultUserAgent)
/* harmony export */ });
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ "../nodejs/files/node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);

const createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => async (config) => {
    const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent
        ? bowser__WEBPACK_IMPORTED_MODULE_0___default().parse(window.navigator.userAgent)
        : undefined;
    const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.1"],
        [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
        ["lang/js"],
        ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`],
    ];
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    const appId = await config?.userAgentAppId?.();
    if (appId) {
        sections.push([`app/${appId}`]);
    }
    return sections;
};
const defaultUserAgent = createDefaultUserAgentProvider;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js":
/*!*****************************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_USE_DUALSTACK_ENDPOINT: () => (/* binding */ CONFIG_USE_DUALSTACK_ENDPOINT),
/* harmony export */   DEFAULT_USE_DUALSTACK_ENDPOINT: () => (/* binding */ DEFAULT_USE_DUALSTACK_ENDPOINT),
/* harmony export */   ENV_USE_DUALSTACK_ENDPOINT: () => (/* binding */ ENV_USE_DUALSTACK_ENDPOINT),
/* harmony export */   NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => (/* binding */ NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS)
/* harmony export */ });
/* harmony import */ var _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-config-provider */ "../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/index.js");

const ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
const CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
const DEFAULT_USE_DUALSTACK_ENDPOINT = false;
const NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(env, ENV_USE_DUALSTACK_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.ENV),
    configFileSelector: (profile) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(profile, CONFIG_USE_DUALSTACK_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.CONFIG),
    default: false,
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js":
/*!************************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_USE_FIPS_ENDPOINT: () => (/* binding */ CONFIG_USE_FIPS_ENDPOINT),
/* harmony export */   DEFAULT_USE_FIPS_ENDPOINT: () => (/* binding */ DEFAULT_USE_FIPS_ENDPOINT),
/* harmony export */   ENV_USE_FIPS_ENDPOINT: () => (/* binding */ ENV_USE_FIPS_ENDPOINT),
/* harmony export */   NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => (/* binding */ NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
/* harmony export */ });
/* harmony import */ var _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-config-provider */ "../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/index.js");

const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
const DEFAULT_USE_FIPS_ENDPOINT = false;
const NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(env, ENV_USE_FIPS_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.ENV),
    configFileSelector: (profile) => (0,_smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(profile, CONFIG_USE_FIPS_ENDPOINT, _smithy_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.CONFIG),
    default: false,
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_DUALSTACK_ENDPOINT),
/* harmony export */   CONFIG_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.CONFIG_USE_FIPS_ENDPOINT),
/* harmony export */   DEFAULT_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_DUALSTACK_ENDPOINT),
/* harmony export */   DEFAULT_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_USE_FIPS_ENDPOINT),
/* harmony export */   ENV_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_DUALSTACK_ENDPOINT),
/* harmony export */   ENV_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.ENV_USE_FIPS_ENDPOINT),
/* harmony export */   NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   resolveCustomEndpointsConfig: () => (/* reexport safe */ _resolveCustomEndpointsConfig__WEBPACK_IMPORTED_MODULE_2__.resolveCustomEndpointsConfig),
/* harmony export */   resolveEndpointsConfig: () => (/* reexport safe */ _resolveEndpointsConfig__WEBPACK_IMPORTED_MODULE_3__.resolveEndpointsConfig)
/* harmony export */ });
/* harmony import */ var _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeUseDualstackEndpointConfigOptions */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js");
/* harmony import */ var _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeUseFipsEndpointConfigOptions */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js");
/* harmony import */ var _resolveCustomEndpointsConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveCustomEndpointsConfig */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js");
/* harmony import */ var _resolveEndpointsConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveEndpointsConfig */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js");






/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js":
/*!********************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveCustomEndpointsConfig: () => (/* binding */ resolveCustomEndpointsConfig)
/* harmony export */ });
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js");

const resolveCustomEndpointsConfig = (input) => {
    const { endpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js":
/*!**************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveEndpointsConfig: () => (/* binding */ resolveEndpointsConfig)
/* harmony export */ });
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js");
/* harmony import */ var _utils_getEndpointFromRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getEndpointFromRegion */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js");


const resolveEndpointsConfig = (input) => {
    const useDualstackEndpoint = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false);
    const { endpoint, useFipsEndpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: endpoint
            ? (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint)
            : () => (0,_utils_getEndpointFromRegion__WEBPACK_IMPORTED_MODULE_1__.getEndpointFromRegion)({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint,
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js":
/*!*******************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointFromRegion: () => (/* binding */ getEndpointFromRegion)
/* harmony export */ });
const getEndpointFromRegion = async (input) => {
    const { tls = true } = input;
    const region = await input.region();
    const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
    if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
    }
    const useDualstackEndpoint = await input.useDualstackEndpoint();
    const useFipsEndpoint = await input.useFipsEndpoint();
    const { hostname } = (await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint })) ?? {};
    if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
    }
    return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/index.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_DUALSTACK_ENDPOINT),
/* harmony export */   CONFIG_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_FIPS_ENDPOINT),
/* harmony export */   DEFAULT_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_DUALSTACK_ENDPOINT),
/* harmony export */   DEFAULT_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_FIPS_ENDPOINT),
/* harmony export */   ENV_USE_DUALSTACK_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_DUALSTACK_ENDPOINT),
/* harmony export */   ENV_USE_FIPS_ENDPOINT: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_FIPS_ENDPOINT),
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_INI_NAME),
/* harmony export */   getRegionInfo: () => (/* reexport safe */ _regionInfo__WEBPACK_IMPORTED_MODULE_2__.getRegionInfo),
/* harmony export */   resolveCustomEndpointsConfig: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.resolveCustomEndpointsConfig),
/* harmony export */   resolveEndpointsConfig: () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.resolveEndpointsConfig),
/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endpointsConfig */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js");
/* harmony import */ var _regionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regionConfig */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js");
/* harmony import */ var _regionInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regionInfo */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* binding */ NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* binding */ REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* binding */ REGION_INI_NAME)
/* harmony export */ });
const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js":
/*!**************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRealRegion: () => (/* binding */ getRealRegion)
/* harmony export */ });
/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFipsRegion */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js");

const getRealRegion = (region) => (0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_0__.isFipsRegion)(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_REGION_CONFIG_FILE_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   NODE_REGION_CONFIG_OPTIONS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   REGION_ENV_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_ENV_NAME),
/* harmony export */   REGION_INI_NAME: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_INI_NAME),
/* harmony export */   resolveRegionConfig: () => (/* reexport safe */ _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js");
/* harmony import */ var _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveRegionConfig */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js":
/*!*************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFipsRegion: () => (/* binding */ isFipsRegion)
/* harmony export */ });
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js":
/*!********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRegionConfig: () => (/* binding */ resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _getRealRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRealRegion */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js");
/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFipsRegion */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js");


const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(region);
            }
            const providedRegion = await region();
            return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if ((0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_1__.isFipsRegion)(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js":
/*!************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js":
/*!**********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHostnameFromVariants: () => (/* binding */ getHostnameFromVariants)
/* harmony export */ });
const getHostnameFromVariants = (variants = [], { useFipsEndpoint, useDualstackEndpoint }) => variants.find(({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"))?.hostname;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js":
/*!************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegionInfo: () => (/* binding */ getRegionInfo)
/* harmony export */ });
/* harmony import */ var _getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHostnameFromVariants */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js");
/* harmony import */ var _getResolvedHostname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getResolvedHostname */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js");
/* harmony import */ var _getResolvedPartition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getResolvedPartition */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js");
/* harmony import */ var _getResolvedSigningRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getResolvedSigningRegion */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js");




const getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash, }) => {
    const partition = (0,_getResolvedPartition__WEBPACK_IMPORTED_MODULE_2__.getResolvedPartition)(region, { partitionHash });
    const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;
    const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
    const regionHostname = (0,_getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__.getHostnameFromVariants)(regionHash[resolvedRegion]?.variants, hostnameOptions);
    const partitionHostname = (0,_getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__.getHostnameFromVariants)(partitionHash[partition]?.variants, hostnameOptions);
    const hostname = (0,_getResolvedHostname__WEBPACK_IMPORTED_MODULE_1__.getResolvedHostname)(resolvedRegion, { regionHostname, partitionHostname });
    if (hostname === undefined) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
    }
    const signingRegion = (0,_getResolvedSigningRegion__WEBPACK_IMPORTED_MODULE_3__.getResolvedSigningRegion)(hostname, {
        signingRegion: regionHash[resolvedRegion]?.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint,
    });
    return {
        partition,
        signingService,
        hostname,
        ...(signingRegion && { signingRegion }),
        ...(regionHash[resolvedRegion]?.signingService && {
            signingService: regionHash[resolvedRegion].signingService,
        }),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js":
/*!******************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResolvedHostname: () => (/* binding */ getResolvedHostname)
/* harmony export */ });
const getResolvedHostname = (resolvedRegion, { regionHostname, partitionHostname }) => regionHostname
    ? regionHostname
    : partitionHostname
        ? partitionHostname.replace("{region}", resolvedRegion)
        : undefined;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js":
/*!*******************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResolvedPartition: () => (/* binding */ getResolvedPartition)
/* harmony export */ });
const getResolvedPartition = (region, { partitionHash }) => Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js":
/*!***********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResolvedSigningRegion: () => (/* binding */ getResolvedSigningRegion)
/* harmony export */ });
const getResolvedSigningRegion = (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
    if (signingRegion) {
        return signingRegion;
    }
    else if (useFipsEndpoint) {
        const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
        const regionRegexmatchArray = hostname.match(regionRegexJs);
        if (regionRegexmatchArray) {
            return regionRegexmatchArray[0].slice(1, -1);
        }
    }
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegionInfo: () => (/* reexport safe */ _getRegionInfo__WEBPACK_IMPORTED_MODULE_2__.getRegionInfo)
/* harmony export */ });
/* harmony import */ var _PartitionHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartitionHash */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js");
/* harmony import */ var _RegionHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegionHash */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js");
/* harmony import */ var _getRegionInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRegionInfo */ "../nodejs/files/node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/getSmithyContext.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/getSmithyContext.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSmithyContext: () => (/* binding */ getSmithyContext)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ "../nodejs/files/node_modules/@smithy/types/dist-es/index.js");

const getSmithyContext = (context) => context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] || (context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] = {});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/index.js":
/*!******************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultIdentityProviderConfig: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_7__.DefaultIdentityProviderConfig),
/* harmony export */   EXPIRATION_MS: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_7__.EXPIRATION_MS),
/* harmony export */   HttpApiKeyAuthSigner: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_7__.HttpApiKeyAuthSigner),
/* harmony export */   HttpBearerAuthSigner: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_7__.HttpBearerAuthSigner),
/* harmony export */   NoAuthSigner: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_7__.NoAuthSigner),
/* harmony export */   createIsIdentityExpiredFunction: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_7__.createIsIdentityExpiredFunction),
/* harmony export */   createPaginator: () => (/* reexport safe */ _pagination_createPaginator__WEBPACK_IMPORTED_MODULE_4__.createPaginator),
/* harmony export */   doesIdentityRequireRefresh: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_7__.doesIdentityRequireRefresh),
/* harmony export */   getHttpAuthSchemeEndpointRuleSetPlugin: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_1__.getHttpAuthSchemeEndpointRuleSetPlugin),
/* harmony export */   getHttpAuthSchemePlugin: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_1__.getHttpAuthSchemePlugin),
/* harmony export */   getHttpSigningPlugin: () => (/* reexport safe */ _middleware_http_signing__WEBPACK_IMPORTED_MODULE_2__.getHttpSigningPlugin),
/* harmony export */   getSmithyContext: () => (/* reexport safe */ _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext),
/* harmony export */   httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeEndpointRuleSetMiddlewareOptions),
/* harmony export */   httpAuthSchemeMiddleware: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeMiddleware),
/* harmony export */   httpAuthSchemeMiddlewareOptions: () => (/* reexport safe */ _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeMiddlewareOptions),
/* harmony export */   httpSigningMiddleware: () => (/* reexport safe */ _middleware_http_signing__WEBPACK_IMPORTED_MODULE_2__.httpSigningMiddleware),
/* harmony export */   httpSigningMiddlewareOptions: () => (/* reexport safe */ _middleware_http_signing__WEBPACK_IMPORTED_MODULE_2__.httpSigningMiddlewareOptions),
/* harmony export */   isIdentityExpired: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_7__.isIdentityExpired),
/* harmony export */   memoizeIdentityProvider: () => (/* reexport safe */ _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_7__.memoizeIdentityProvider),
/* harmony export */   normalizeProvider: () => (/* reexport safe */ _normalizeProvider__WEBPACK_IMPORTED_MODULE_3__.normalizeProvider),
/* harmony export */   requestBuilder: () => (/* reexport safe */ _protocols_requestBuilder__WEBPACK_IMPORTED_MODULE_5__.requestBuilder),
/* harmony export */   setFeature: () => (/* reexport safe */ _setFeature__WEBPACK_IMPORTED_MODULE_6__.setFeature)
/* harmony export */ });
/* harmony import */ var _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSmithyContext */ "../nodejs/files/node_modules/@smithy/core/dist-es/getSmithyContext.js");
/* harmony import */ var _middleware_http_auth_scheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleware-http-auth-scheme */ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js");
/* harmony import */ var _middleware_http_signing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware-http-signing */ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js");
/* harmony import */ var _normalizeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalizeProvider */ "../nodejs/files/node_modules/@smithy/core/dist-es/normalizeProvider.js");
/* harmony import */ var _pagination_createPaginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination/createPaginator */ "../nodejs/files/node_modules/@smithy/core/dist-es/pagination/createPaginator.js");
/* harmony import */ var _protocols_requestBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./protocols/requestBuilder */ "../nodejs/files/node_modules/@smithy/core/dist-es/protocols/requestBuilder.js");
/* harmony import */ var _setFeature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setFeature */ "../nodejs/files/node_modules/@smithy/core/dist-es/setFeature.js");
/* harmony import */ var _util_identity_and_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util-identity-and-auth */ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js");










/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js":
/*!*******************************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpAuthSchemeEndpointRuleSetPlugin: () => (/* binding */ getHttpAuthSchemeEndpointRuleSetPlugin),
/* harmony export */   httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => (/* binding */ httpAuthSchemeEndpointRuleSetMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpAuthSchemeMiddleware */ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js");

const httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware",
};
const getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0,_httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_0__.httpAuthSchemeMiddleware)(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
    },
});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js":
/*!****************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpAuthSchemePlugin: () => (/* binding */ getHttpAuthSchemePlugin),
/* harmony export */   httpAuthSchemeMiddlewareOptions: () => (/* binding */ httpAuthSchemeMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-serde */ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/index.js");
/* harmony import */ var _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpAuthSchemeMiddleware */ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js");


const httpAuthSchemeMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__.serializerMiddlewareOption.name,
};
const getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0,_httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeMiddleware)(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
        }), httpAuthSchemeMiddlewareOptions);
    },
});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js":
/*!*****************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpAuthSchemeMiddleware: () => (/* binding */ httpAuthSchemeMiddleware)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ "../nodejs/files/node_modules/@smithy/types/dist-es/index.js");
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-middleware */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js");


function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = new Map();
    for (const scheme of httpAuthSchemes) {
        map.set(scheme.schemeId, scheme);
    }
    return map;
}
const httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
    const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
    const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
    const smithyContext = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__.getSmithyContext)(context);
    const failureReasons = [];
    for (const option of options) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
            continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
            continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
            httpAuthOption: option,
            identity: await identityProvider(option.identityProperties),
            signer: scheme.signer,
        };
        break;
    }
    if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
    }
    return next(args);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpAuthSchemeEndpointRuleSetPlugin: () => (/* reexport safe */ _getHttpAuthSchemeEndpointRuleSetPlugin__WEBPACK_IMPORTED_MODULE_1__.getHttpAuthSchemeEndpointRuleSetPlugin),
/* harmony export */   getHttpAuthSchemePlugin: () => (/* reexport safe */ _getHttpAuthSchemePlugin__WEBPACK_IMPORTED_MODULE_2__.getHttpAuthSchemePlugin),
/* harmony export */   httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => (/* reexport safe */ _getHttpAuthSchemeEndpointRuleSetPlugin__WEBPACK_IMPORTED_MODULE_1__.httpAuthSchemeEndpointRuleSetMiddlewareOptions),
/* harmony export */   httpAuthSchemeMiddleware: () => (/* reexport safe */ _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_0__.httpAuthSchemeMiddleware),
/* harmony export */   httpAuthSchemeMiddlewareOptions: () => (/* reexport safe */ _getHttpAuthSchemePlugin__WEBPACK_IMPORTED_MODULE_2__.httpAuthSchemeMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _httpAuthSchemeMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpAuthSchemeMiddleware */ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js");
/* harmony import */ var _getHttpAuthSchemeEndpointRuleSetPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHttpAuthSchemeEndpointRuleSetPlugin */ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js");
/* harmony import */ var _getHttpAuthSchemePlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getHttpAuthSchemePlugin */ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js":
/*!*************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpSigningPlugin: () => (/* binding */ getHttpSigningPlugin),
/* harmony export */   httpSigningMiddlewareOptions: () => (/* binding */ httpSigningMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpSigningMiddleware */ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js");

const httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: "retryMiddleware",
};
const getHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0,_httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_0__.httpSigningMiddleware)(config), httpSigningMiddlewareOptions);
    },
});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js":
/*!**********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpSigningMiddleware: () => (/* binding */ httpSigningMiddleware)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/types */ "../nodejs/files/node_modules/@smithy/types/dist-es/index.js");
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-middleware */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js");



const defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
};
const defaultSuccessHandler = (httpResponse, signingProperties) => { };
const httpSigningMiddleware = (config) => (next, context) => async (args) => {
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(args.request)) {
        return next(args);
    }
    const smithyContext = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_2__.getSmithyContext)(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer, } = scheme;
    const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties),
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpSigningPlugin: () => (/* reexport safe */ _getHttpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__.getHttpSigningPlugin),
/* harmony export */   httpSigningMiddleware: () => (/* reexport safe */ _httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_0__.httpSigningMiddleware),
/* harmony export */   httpSigningMiddlewareOptions: () => (/* reexport safe */ _getHttpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__.httpSigningMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _httpSigningMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpSigningMiddleware */ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js");
/* harmony import */ var _getHttpSigningMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHttpSigningMiddleware */ "../nodejs/files/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/normalizeProvider.js":
/*!******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/normalizeProvider.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeProvider: () => (/* binding */ normalizeProvider)
/* harmony export */ });
const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/pagination/createPaginator.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/pagination/createPaginator.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPaginator: () => (/* binding */ createPaginator)
/* harmony export */ });
const makePagedClientRequest = async (CommandCtor, client, input, ...args) => {
    return await client.send(new CommandCtor(input), ...args);
};
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
    return async function* paginateOperation(config, input, ...additionalArguments) {
        let token = config.startingToken || undefined;
        let hasNext = true;
        let page;
        while (hasNext) {
            input[inputTokenName] = token;
            if (pageSizeTokenName) {
                input[pageSizeTokenName] = input[pageSizeTokenName] ?? config.pageSize;
            }
            if (config.client instanceof ClientCtor) {
                page = await makePagedClientRequest(CommandCtor, config.client, input, ...additionalArguments);
            }
            else {
                throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
            }
            yield page;
            const prevToken = token;
            token = get(page, outputTokenName);
            hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
        }
        return undefined;
    };
}
const get = (fromObject, path) => {
    let cursor = fromObject;
    const pathComponents = path.split(".");
    for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
            return undefined;
        }
        cursor = cursor[step];
    }
    return cursor;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/protocols/requestBuilder.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/protocols/requestBuilder.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestBuilder: () => (/* reexport safe */ _smithy_core_protocols__WEBPACK_IMPORTED_MODULE_0__.requestBuilder)
/* harmony export */ });
/* harmony import */ var _smithy_core_protocols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core/protocols */ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/index.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/setFeature.js":
/*!***********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/setFeature.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setFeature: () => (/* binding */ setFeature)
/* harmony export */ });
function setFeature(context, feature, value) {
    if (!context.__smithy_context) {
        context.__smithy_context = {
            features: {},
        };
    }
    else if (!context.__smithy_context.features) {
        context.__smithy_context.features = {};
    }
    context.__smithy_context.features[feature] = value;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js":
/*!*****************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectBody: () => (/* binding */ collectBody)
/* harmony export */ });
/* harmony import */ var _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-stream */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/index.js");

const collectBody = async (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
        return _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return _smithy_util_stream__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter.mutate(await fromContext);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js":
/*!***************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extendedEncodeURIComponent: () => (/* binding */ extendedEncodeURIComponent)
/* harmony export */ });
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/index.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestBuilder: () => (/* reexport safe */ _requestBuilder__WEBPACK_IMPORTED_MODULE_2__.RequestBuilder),
/* harmony export */   collectBody: () => (/* reexport safe */ _collect_stream_body__WEBPACK_IMPORTED_MODULE_0__.collectBody),
/* harmony export */   extendedEncodeURIComponent: () => (/* reexport safe */ _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent),
/* harmony export */   requestBuilder: () => (/* reexport safe */ _requestBuilder__WEBPACK_IMPORTED_MODULE_2__.requestBuilder),
/* harmony export */   resolvedPath: () => (/* reexport safe */ _resolve_path__WEBPACK_IMPORTED_MODULE_3__.resolvedPath)
/* harmony export */ });
/* harmony import */ var _collect_stream_body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collect-stream-body */ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js");
/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extended-encode-uri-component */ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js");
/* harmony import */ var _requestBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requestBuilder */ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js");
/* harmony import */ var _resolve_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-path */ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js");






/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js":
/*!************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestBuilder: () => (/* binding */ RequestBuilder),
/* harmony export */   requestBuilder: () => (/* binding */ requestBuilder)
/* harmony export */ });
/* harmony import */ var _smithy_core_protocols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core/protocols */ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/index.js");
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");


function requestBuilder(input, context) {
    return new RequestBuilder(input, context);
}
class RequestBuilder {
    constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
    }
    async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
            resolvePath(this.path);
        }
        return new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest({
            protocol,
            hostname: this.hostname || hostname,
            port,
            method: this.method,
            path: this.path,
            query: this.query,
            body: this.body,
            headers: this.headers,
        });
    }
    hn(hostname) {
        this.hostname = hostname;
        return this;
    }
    bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
            this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
    }
    p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
            this.path = (0,_smithy_core_protocols__WEBPACK_IMPORTED_MODULE_0__.resolvedPath)(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
    }
    h(headers) {
        this.headers = headers;
        return this;
    }
    q(query) {
        this.query = query;
        return this;
    }
    b(body) {
        this.body = body;
        return this;
    }
    m(method) {
        this.method = method;
        return this;
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolvedPath: () => (/* binding */ resolvedPath)
/* harmony export */ });
/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extended-encode-uri-component */ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js");

const resolvedPath = (resolvedPath, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
    if (input != null && input[memberName] !== undefined) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath = resolvedPath.replace(uriLabel, isGreedyLabel
            ? labelValue
                .split("/")
                .map((segment) => (0,_extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__.extendedEncodeURIComponent)(segment))
                .join("/")
            : (0,_extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__.extendedEncodeURIComponent)(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
    }
    return resolvedPath;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js":
/*!*****************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultIdentityProviderConfig: () => (/* binding */ DefaultIdentityProviderConfig)
/* harmony export */ });
class DefaultIdentityProviderConfig {
    constructor(config) {
        this.authSchemes = new Map();
        for (const [key, value] of Object.entries(config)) {
            if (value !== undefined) {
                this.authSchemes.set(key, value);
            }
        }
    }
    getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js":
/*!******************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpApiKeyAuthSigner: () => (/* binding */ HttpApiKeyAuthSigner)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/types */ "../nodejs/files/node_modules/@smithy/types/dist-es/index.js");


class HttpApiKeyAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        if (!signingProperties) {
            throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        }
        if (!signingProperties.name) {
            throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        }
        if (!signingProperties.in) {
            throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        }
        if (!identity.apiKey) {
            throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        }
        const clonedRequest = _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.clone(httpRequest);
        if (signingProperties.in === _smithy_types__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation.QUERY) {
            clonedRequest.query[signingProperties.name] = identity.apiKey;
        }
        else if (signingProperties.in === _smithy_types__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation.HEADER) {
            clonedRequest.headers[signingProperties.name] = signingProperties.scheme
                ? `${signingProperties.scheme} ${identity.apiKey}`
                : identity.apiKey;
        }
        else {
            throw new Error("request can only be signed with `apiKey` locations `query` or `header`, " +
                "but found: `" +
                signingProperties.in +
                "`");
        }
        return clonedRequest;
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js":
/*!******************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpBearerAuthSigner: () => (/* binding */ HttpBearerAuthSigner)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");

class HttpBearerAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        const clonedRequest = _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.clone(httpRequest);
        if (!identity.token) {
            throw new Error("request could not be signed with `token` since the `token` is not defined");
        }
        clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
        return clonedRequest;
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js":
/*!*********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpApiKeyAuthSigner: () => (/* reexport safe */ _httpApiKeyAuth__WEBPACK_IMPORTED_MODULE_0__.HttpApiKeyAuthSigner),
/* harmony export */   HttpBearerAuthSigner: () => (/* reexport safe */ _httpBearerAuth__WEBPACK_IMPORTED_MODULE_1__.HttpBearerAuthSigner),
/* harmony export */   NoAuthSigner: () => (/* reexport safe */ _noAuth__WEBPACK_IMPORTED_MODULE_2__.NoAuthSigner)
/* harmony export */ });
/* harmony import */ var _httpApiKeyAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpApiKeyAuth */ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js");
/* harmony import */ var _httpBearerAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpBearerAuth */ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js");
/* harmony import */ var _noAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noAuth */ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js":
/*!**********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoAuthSigner: () => (/* binding */ NoAuthSigner)
/* harmony export */ });
class NoAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultIdentityProviderConfig: () => (/* reexport safe */ _DefaultIdentityProviderConfig__WEBPACK_IMPORTED_MODULE_0__.DefaultIdentityProviderConfig),
/* harmony export */   EXPIRATION_MS: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.EXPIRATION_MS),
/* harmony export */   HttpApiKeyAuthSigner: () => (/* reexport safe */ _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthSigner),
/* harmony export */   HttpBearerAuthSigner: () => (/* reexport safe */ _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__.HttpBearerAuthSigner),
/* harmony export */   NoAuthSigner: () => (/* reexport safe */ _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__.NoAuthSigner),
/* harmony export */   createIsIdentityExpiredFunction: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.createIsIdentityExpiredFunction),
/* harmony export */   doesIdentityRequireRefresh: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.doesIdentityRequireRefresh),
/* harmony export */   isIdentityExpired: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.isIdentityExpired),
/* harmony export */   memoizeIdentityProvider: () => (/* reexport safe */ _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__.memoizeIdentityProvider)
/* harmony export */ });
/* harmony import */ var _DefaultIdentityProviderConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultIdentityProviderConfig */ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js");
/* harmony import */ var _httpAuthSchemes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpAuthSchemes */ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js");
/* harmony import */ var _memoizeIdentityProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memoizeIdentityProvider */ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js":
/*!***********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPIRATION_MS: () => (/* binding */ EXPIRATION_MS),
/* harmony export */   createIsIdentityExpiredFunction: () => (/* binding */ createIsIdentityExpiredFunction),
/* harmony export */   doesIdentityRequireRefresh: () => (/* binding */ doesIdentityRequireRefresh),
/* harmony export */   isIdentityExpired: () => (/* binding */ isIdentityExpired),
/* harmony export */   memoizeIdentityProvider: () => (/* binding */ memoizeIdentityProvider)
/* harmony export */ });
const createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
const EXPIRATION_MS = 300000;
const isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
const doesIdentityRequireRefresh = (identity) => identity.expiration !== undefined;
const memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
    if (provider === undefined) {
        return undefined;
    }
    const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async (options) => {
        if (!pending) {
            pending = normalizedProvider(options);
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider(options);
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
        }
        if (isConstant) {
            return resolved;
        }
        if (!requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider(options);
            return resolved;
        }
        return resolved;
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchHttpHandler: () => (/* binding */ FetchHttpHandler),
/* harmony export */   keepAliveSupport: () => (/* binding */ keepAliveSupport)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/querystring-builder */ "../nodejs/files/node_modules/@smithy/querystring-builder/dist-es/index.js");
/* harmony import */ var _request_timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-timeout */ "../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js");



const keepAliveSupport = {
    supported: undefined,
};
class FetchHttpHandler {
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new FetchHttpHandler(instanceOrOptions);
    }
    constructor(options) {
        if (typeof options === "function") {
            this.configProvider = options().then((opts) => opts || {});
        }
        else {
            this.config = options ?? {};
            this.configProvider = Promise.resolve(this.config);
        }
        if (keepAliveSupport.supported === undefined) {
            keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in new Request("https://[::1]"));
        }
    }
    destroy() {
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        const requestTimeoutInMs = this.config.requestTimeout;
        const keepAlive = this.config.keepAlive === true;
        const credentials = this.config.credentials;
        if (abortSignal?.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            return Promise.reject(abortError);
        }
        let path = request.path;
        const queryString = (0,_smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__.buildQueryString)(request.query || {});
        if (queryString) {
            path += `?${queryString}`;
        }
        if (request.fragment) {
            path += `#${request.fragment}`;
        }
        let auth = "";
        if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}@`;
        }
        const { port, method } = request;
        const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
        const body = method === "GET" || method === "HEAD" ? undefined : request.body;
        const requestOptions = {
            body,
            headers: new Headers(request.headers),
            method: method,
            credentials,
        };
        if (this.config?.cache) {
            requestOptions.cache = this.config.cache;
        }
        if (body) {
            requestOptions.duplex = "half";
        }
        if (typeof AbortController !== "undefined") {
            requestOptions.signal = abortSignal;
        }
        if (keepAliveSupport.supported) {
            requestOptions.keepalive = keepAlive;
        }
        if (typeof this.config.requestInit === "function") {
            Object.assign(requestOptions, this.config.requestInit(request));
        }
        let removeSignalEventListener = () => { };
        const fetchRequest = new Request(url, requestOptions);
        const raceOfPromises = [
            fetch(fetchRequest).then((response) => {
                const fetchHeaders = response.headers;
                const transformedHeaders = {};
                for (const pair of fetchHeaders.entries()) {
                    transformedHeaders[pair[0]] = pair[1];
                }
                const hasReadableStream = response.body != undefined;
                if (!hasReadableStream) {
                    return response.blob().then((body) => ({
                        response: new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({
                            headers: transformedHeaders,
                            reason: response.statusText,
                            statusCode: response.status,
                            body,
                        }),
                    }));
                }
                return {
                    response: new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({
                        headers: transformedHeaders,
                        reason: response.statusText,
                        statusCode: response.status,
                        body: response.body,
                    }),
                };
            }),
            (0,_request_timeout__WEBPACK_IMPORTED_MODULE_2__.requestTimeout)(requestTimeoutInMs),
        ];
        if (abortSignal) {
            raceOfPromises.push(new Promise((resolve, reject) => {
                const onAbort = () => {
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
                if (typeof abortSignal.addEventListener === "function") {
                    const signal = abortSignal;
                    signal.addEventListener("abort", onAbort, { once: true });
                    removeSignalEventListener = () => signal.removeEventListener("abort", onAbort);
                }
                else {
                    abortSignal.onabort = onAbort;
                }
            }));
        }
        return Promise.race(raceOfPromises).finally(removeSignalEventListener);
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            config[key] = value;
            return config;
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/index.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchHttpHandler: () => (/* reexport safe */ _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__.FetchHttpHandler),
/* harmony export */   keepAliveSupport: () => (/* reexport safe */ _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__.keepAliveSupport),
/* harmony export */   streamCollector: () => (/* reexport safe */ _stream_collector__WEBPACK_IMPORTED_MODULE_1__.streamCollector)
/* harmony export */ });
/* harmony import */ var _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-http-handler */ "../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js");
/* harmony import */ var _stream_collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stream-collector */ "../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestTimeout: () => (/* binding */ requestTimeout)
/* harmony export */ });
function requestTimeout(timeoutInMs = 0) {
    return new Promise((resolve, reject) => {
        if (timeoutInMs) {
            setTimeout(() => {
                const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
                timeoutError.name = "TimeoutError";
                reject(timeoutError);
            }, timeoutInMs);
        }
    });
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   streamCollector: () => (/* binding */ streamCollector)
/* harmony export */ });
const streamCollector = async (stream) => {
    if (typeof Blob === "function" && stream instanceof Blob) {
        return new Uint8Array(await stream.arrayBuffer());
    }
    return collectStream(stream);
};
async function collectStream(stream) {
    const chunks = [];
    const reader = stream.getReader();
    let isDone = false;
    let length = 0;
    while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
            chunks.push(value);
            length += value.length;
        }
        isDone = done;
    }
    const collected = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
    }
    return collected;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/invalid-dependency/dist-es/index.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/invalid-dependency/dist-es/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invalidFunction: () => (/* reexport safe */ _invalidFunction__WEBPACK_IMPORTED_MODULE_0__.invalidFunction),
/* harmony export */   invalidProvider: () => (/* reexport safe */ _invalidProvider__WEBPACK_IMPORTED_MODULE_1__.invalidProvider)
/* harmony export */ });
/* harmony import */ var _invalidFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalidFunction */ "../nodejs/files/node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js");
/* harmony import */ var _invalidProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidProvider */ "../nodejs/files/node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invalidFunction: () => (/* binding */ invalidFunction)
/* harmony export */ });
const invalidFunction = (message) => () => {
    throw new Error(message);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invalidProvider: () => (/* binding */ invalidProvider)
/* harmony export */ });
const invalidProvider = (message) => () => Promise.reject(message);


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/is-array-buffer/dist-es/index.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/is-array-buffer/dist-es/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer)
/* harmony export */ });
const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-content-length/dist-es/index.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-content-length/dist-es/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentLengthMiddleware: () => (/* binding */ contentLengthMiddleware),
/* harmony export */   contentLengthMiddlewareOptions: () => (/* binding */ contentLengthMiddlewareOptions),
/* harmony export */   getContentLengthPlugin: () => (/* binding */ getContentLengthPlugin)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");

const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
        const request = args.request;
        if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
            const { body, headers } = request;
            if (body &&
                Object.keys(headers)
                    .map((str) => str.toLowerCase())
                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                try {
                    const length = bodyLengthChecker(body);
                    request.headers = {
                        ...request.headers,
                        [CONTENT_LENGTH_HEADER]: String(length),
                    };
                }
                catch (error) {
                }
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
const contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
const getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    },
});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js":
/*!**************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConfigValueProvider: () => (/* binding */ createConfigValueProvider)
/* harmony export */ });
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
    const configProvider = async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
            return configValue;
        };
    }
    if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.accountId ?? credentials?.AccountId;
            return configValue;
        };
    }
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js":
/*!******************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointFromConfig: () => (/* binding */ getEndpointFromConfig)
/* harmony export */ });
const getEndpointFromConfig = async (serviceId) => undefined;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js":
/*!****************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointFromInstructions: () => (/* binding */ getEndpointFromInstructions),
/* harmony export */   resolveParams: () => (/* binding */ resolveParams)
/* harmony export */ });
/* harmony import */ var _service_customizations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service-customizations */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js");
/* harmony import */ var _createConfigValueProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createConfigValueProvider */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js");
/* harmony import */ var _getEndpointFromConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointFromConfig */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js");
/* harmony import */ var _toEndpointV1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toEndpointV1 */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js");




const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
    if (!clientConfig.endpoint) {
        let endpointFromConfig;
        if (clientConfig.serviceConfiguredEndpoint) {
            endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
        }
        else {
            endpointFromConfig = await (0,_getEndpointFromConfig__WEBPACK_IMPORTED_MODULE_2__.getEndpointFromConfig)(clientConfig.serviceId);
        }
        if (endpointFromConfig) {
            clientConfig.endpoint = () => Promise.resolve((0,_toEndpointV1__WEBPACK_IMPORTED_MODULE_3__.toEndpointV1)(endpointFromConfig));
        }
    }
    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
};
const resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
    const endpointParams = {};
    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
    for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await (0,_createConfigValueProvider__WEBPACK_IMPORTED_MODULE_1__.createConfigValueProvider)(instruction.name, name, clientConfig)();
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await (0,_service_customizations__WEBPACK_IMPORTED_MODULE_0__.resolveParamsForS3)(endpointParams);
    }
    return endpointParams;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointFromInstructions: () => (/* reexport safe */ _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__.getEndpointFromInstructions),
/* harmony export */   resolveParams: () => (/* reexport safe */ _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__.resolveParams),
/* harmony export */   toEndpointV1: () => (/* reexport safe */ _toEndpointV1__WEBPACK_IMPORTED_MODULE_1__.toEndpointV1)
/* harmony export */ });
/* harmony import */ var _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEndpointFromInstructions */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js");
/* harmony import */ var _toEndpointV1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toEndpointV1 */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js":
/*!*************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toEndpointV1: () => (/* binding */ toEndpointV1)
/* harmony export */ });
/* harmony import */ var _smithy_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/url-parser */ "../nodejs/files/node_modules/@smithy/url-parser/dist-es/index.js");

const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return (0,_smithy_url_parser__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(endpoint.url);
        }
        return endpoint;
    }
    return (0,_smithy_url_parser__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(endpoint);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endpointMiddleware: () => (/* binding */ endpointMiddleware)
/* harmony export */ });
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core */ "../nodejs/files/node_modules/@smithy/core/dist-es/index.js");
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-middleware */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js");
/* harmony import */ var _adaptors_getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adaptors/getEndpointFromInstructions */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js");



const endpointMiddleware = ({ config, instructions, }) => {
    return (next, context) => async (args) => {
        if (config.endpoint) {
            (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__.setFeature)(context, "ENDPOINT_OVERRIDE", "N");
        }
        const endpoint = await (0,_adaptors_getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_2__.getEndpointFromInstructions)(args.input, {
            getEndpointParameterInstructions() {
                return instructions;
            },
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
            const smithyContext = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__.getSmithyContext)(context);
            const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
            if (httpAuthOption) {
                httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
                    signing_region: authScheme.signingRegion,
                    signingRegion: authScheme.signingRegion,
                    signing_service: authScheme.signingName,
                    signingName: authScheme.signingName,
                    signingRegionSet: authScheme.signingRegionSet,
                }, authScheme.properties);
            }
        }
        return next({
            ...args,
        });
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endpointMiddlewareOptions: () => (/* binding */ endpointMiddlewareOptions),
/* harmony export */   getEndpointPlugin: () => (/* binding */ getEndpointPlugin)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-serde */ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/index.js");
/* harmony import */ var _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpointMiddleware */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js");


const endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: _smithy_middleware_serde__WEBPACK_IMPORTED_MODULE_0__.serializerMiddlewareOption.name,
};
const getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0,_endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__.endpointMiddleware)({
            config,
            instructions,
        }), endpointMiddlewareOptions);
    },
});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/index.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endpointMiddleware: () => (/* reexport safe */ _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__.endpointMiddleware),
/* harmony export */   endpointMiddlewareOptions: () => (/* reexport safe */ _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__.endpointMiddlewareOptions),
/* harmony export */   getEndpointFromInstructions: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.getEndpointFromInstructions),
/* harmony export */   getEndpointPlugin: () => (/* reexport safe */ _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__.getEndpointPlugin),
/* harmony export */   resolveEndpointConfig: () => (/* reexport safe */ _resolveEndpointConfig__WEBPACK_IMPORTED_MODULE_3__.resolveEndpointConfig),
/* harmony export */   resolveParams: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.resolveParams),
/* harmony export */   toEndpointV1: () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.toEndpointV1)
/* harmony export */ });
/* harmony import */ var _adaptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adaptors */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js");
/* harmony import */ var _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpointMiddleware */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js");
/* harmony import */ var _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointPlugin */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js");
/* harmony import */ var _resolveEndpointConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveEndpointConfig */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/types.js");







/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js":
/*!*************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveEndpointConfig: () => (/* binding */ resolveEndpointConfig)
/* harmony export */ });
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js");
/* harmony import */ var _adaptors_getEndpointFromConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adaptors/getEndpointFromConfig */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js");
/* harmony import */ var _adaptors_toEndpointV1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adaptors/toEndpointV1 */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js");



const resolveEndpointConfig = (input) => {
    const tls = input.tls ?? true;
    const { endpoint } = input;
    const customEndpointProvider = endpoint != null ? async () => (0,_adaptors_toEndpointV1__WEBPACK_IMPORTED_MODULE_2__.toEndpointV1)(await (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(endpoint)()) : undefined;
    const isCustomEndpoint = !!endpoint;
    const resolvedConfig = {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false),
        useFipsEndpoint: (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useFipsEndpoint ?? false),
    };
    let configuredEndpointPromise = undefined;
    resolvedConfig.serviceConfiguredEndpoint = async () => {
        if (input.serviceId && !configuredEndpointPromise) {
            configuredEndpointPromise = (0,_adaptors_getEndpointFromConfig__WEBPACK_IMPORTED_MODULE_1__.getEndpointFromConfig)(input.serviceId);
        }
        return configuredEndpointPromise;
    };
    return resolvedConfig;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js":
/*!********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOT_PATTERN: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.DOT_PATTERN),
/* harmony export */   S3_HOSTNAME_PATTERN: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.S3_HOSTNAME_PATTERN),
/* harmony export */   isArnBucketName: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.isArnBucketName),
/* harmony export */   isDnsCompatibleBucketName: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.isDnsCompatibleBucketName),
/* harmony export */   resolveParamsForS3: () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.resolveParamsForS3)
/* harmony export */ });
/* harmony import */ var _s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./s3 */ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js":
/*!*****************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOT_PATTERN: () => (/* binding */ DOT_PATTERN),
/* harmony export */   S3_HOSTNAME_PATTERN: () => (/* binding */ S3_HOSTNAME_PATTERN),
/* harmony export */   isArnBucketName: () => (/* binding */ isArnBucketName),
/* harmony export */   isDnsCompatibleBucketName: () => (/* binding */ isDnsCompatibleBucketName),
/* harmony export */   resolveParamsForS3: () => (/* binding */ resolveParamsForS3)
/* harmony export */ });
const resolveParamsForS3 = async (endpointParams) => {
    const bucket = endpointParams?.Bucket || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    }
    else if (!isDnsCompatibleBucketName(bucket) ||
        (bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:")) ||
        bucket.toLowerCase() !== bucket ||
        bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const DOT_PATTERN = /\./;
const S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
const isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
const isArnBucketName = (bucketName) => {
    const [arn, partition, service, , , bucket] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = Boolean(isArn && partition && service && bucket);
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return isValidArn;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/types.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-endpoint/dist-es/types.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdaptiveRetryStrategy: () => (/* binding */ AdaptiveRetryStrategy)
/* harmony export */ });
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-retry */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/index.js");
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandardRetryStrategy */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js");


class AdaptiveRetryStrategy extends _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.DefaultRateLimiter();
        this.mode = _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.ADAPTIVE;
    }
    async retry(next, args) {
        return super.retry(next, args, {
            beforeRequest: async () => {
                return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
                this.rateLimiter.updateClientSendingRate(response);
            },
        });
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandardRetryStrategy: () => (/* binding */ StandardRetryStrategy)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/service-error-classification */ "../nodejs/files/node_modules/@smithy/service-error-classification/dist-es/index.js");
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-retry */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "../nodejs/files/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _defaultRetryQuota__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultRetryQuota */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js");
/* harmony import */ var _delayDecider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delayDecider */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/delayDecider.js");
/* harmony import */ var _retryDecider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryDecider */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/retryDecider.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/util.js");








class StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.RETRY_MODES.STANDARD;
        this.retryDecider = options?.retryDecider ?? _retryDecider__WEBPACK_IMPORTED_MODULE_5__.defaultRetryDecider;
        this.delayDecider = options?.delayDecider ?? _delayDecider__WEBPACK_IMPORTED_MODULE_4__.defaultDelayDecider;
        this.retryQuota = options?.retryQuota ?? (0,_defaultRetryQuota__WEBPACK_IMPORTED_MODULE_3__.getDefaultRetryQuota)(_smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            maxAttempts = await this.maxAttemptsProvider();
        }
        catch (error) {
            maxAttempts = _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
    }
    async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
            request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.INVOCATION_ID_HEADER] = (0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])();
        }
        while (true) {
            try {
                if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
                    request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                if (options?.beforeRequest) {
                    await options.beforeRequest();
                }
                const { response, output } = await next(args);
                if (options?.afterRequest) {
                    options.afterRequest(response);
                }
                this.retryQuota.releaseRetryTokens(retryTokenAmount);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalDelay;
                return { response, output };
            }
            catch (e) {
                const err = (0,_util__WEBPACK_IMPORTED_MODULE_6__.asSdkError)(e);
                attempts++;
                if (this.shouldRetry(err, attempts, maxAttempts)) {
                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                    const delayFromDecider = this.delayDecider((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isThrottlingError)(err) ? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.THROTTLING_RETRY_DELAY_BASE : _smithy_util_retry__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_RETRY_DELAY_BASE, attempts);
                    const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
                    const delay = Math.max(delayFromResponse || 0, delayFromDecider);
                    totalDelay += delay;
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    continue;
                }
                if (!err.$metadata) {
                    err.$metadata = {};
                }
                err.$metadata.attempts = attempts;
                err.$metadata.totalRetryDelay = totalDelay;
                throw err;
            }
        }
    }
}
const getDelayFromRetryAfterHeader = (response) => {
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1000;
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate.getTime() - Date.now();
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/configurations.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/configurations.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_MAX_ATTEMPTS: () => (/* binding */ CONFIG_MAX_ATTEMPTS),
/* harmony export */   CONFIG_RETRY_MODE: () => (/* binding */ CONFIG_RETRY_MODE),
/* harmony export */   ENV_MAX_ATTEMPTS: () => (/* binding */ ENV_MAX_ATTEMPTS),
/* harmony export */   ENV_RETRY_MODE: () => (/* binding */ ENV_RETRY_MODE),
/* harmony export */   NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => (/* binding */ NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
/* harmony export */   NODE_RETRY_MODE_CONFIG_OPTIONS: () => (/* binding */ NODE_RETRY_MODE_CONFIG_OPTIONS),
/* harmony export */   resolveRetryConfig: () => (/* binding */ resolveRetryConfig)
/* harmony export */ });
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-middleware */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js");
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-retry */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/index.js");


const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
const CONFIG_MAX_ATTEMPTS = "max_attempts";
const NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MAX_ATTEMPTS,
};
const resolveRetryConfig = (input) => {
    const { retryStrategy } = input;
    const maxAttempts = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.maxAttempts ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MAX_ATTEMPTS);
    return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
            if (retryStrategy) {
                return retryStrategy;
            }
            const retryMode = await (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.retryMode)();
            if (retryMode === _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.RETRY_MODES.ADAPTIVE) {
                return new _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.AdaptiveRetryStrategy(maxAttempts);
            }
            return new _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy(maxAttempts);
        },
    };
};
const ENV_RETRY_MODE = "AWS_RETRY_MODE";
const CONFIG_RETRY_MODE = "retry_mode";
const NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
    default: _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_MODE,
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultRetryQuota: () => (/* binding */ getDefaultRetryQuota)
/* harmony export */ });
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-retry */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/index.js");

const getDefaultRetryQuota = (initialRetryTokens, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const noRetryIncrement = options?.noRetryIncrement ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.NO_RETRY_INCREMENT;
    const retryCost = options?.retryCost ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.RETRY_COST;
    const timeoutRetryCost = options?.timeoutRetryCost ?? _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_RETRY_COST;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
    });
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/delayDecider.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/delayDecider.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultDelayDecider: () => (/* binding */ defaultDelayDecider)
/* harmony export */ });
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-retry */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/index.js");

const defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(_smithy_util_retry__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/index.js":
/*!******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdaptiveRetryStrategy: () => (/* reexport safe */ _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__.AdaptiveRetryStrategy),
/* harmony export */   CONFIG_MAX_ATTEMPTS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.CONFIG_MAX_ATTEMPTS),
/* harmony export */   CONFIG_RETRY_MODE: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.CONFIG_RETRY_MODE),
/* harmony export */   ENV_MAX_ATTEMPTS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.ENV_MAX_ATTEMPTS),
/* harmony export */   ENV_RETRY_MODE: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.ENV_RETRY_MODE),
/* harmony export */   NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
/* harmony export */   NODE_RETRY_MODE_CONFIG_OPTIONS: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.NODE_RETRY_MODE_CONFIG_OPTIONS),
/* harmony export */   StandardRetryStrategy: () => (/* reexport safe */ _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy),
/* harmony export */   defaultDelayDecider: () => (/* reexport safe */ _delayDecider__WEBPACK_IMPORTED_MODULE_3__.defaultDelayDecider),
/* harmony export */   defaultRetryDecider: () => (/* reexport safe */ _retryDecider__WEBPACK_IMPORTED_MODULE_5__.defaultRetryDecider),
/* harmony export */   getOmitRetryHeadersPlugin: () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.getOmitRetryHeadersPlugin),
/* harmony export */   getRetryAfterHint: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.getRetryAfterHint),
/* harmony export */   getRetryPlugin: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.getRetryPlugin),
/* harmony export */   omitRetryHeadersMiddleware: () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.omitRetryHeadersMiddleware),
/* harmony export */   omitRetryHeadersMiddlewareOptions: () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.omitRetryHeadersMiddlewareOptions),
/* harmony export */   resolveRetryConfig: () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.resolveRetryConfig),
/* harmony export */   retryMiddleware: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.retryMiddleware),
/* harmony export */   retryMiddlewareOptions: () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.retryMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdaptiveRetryStrategy */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js");
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandardRetryStrategy */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js");
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configurations */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/configurations.js");
/* harmony import */ var _delayDecider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delayDecider */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/delayDecider.js");
/* harmony import */ var _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./omitRetryHeadersMiddleware */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js");
/* harmony import */ var _retryDecider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryDecider */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/retryDecider.js");
/* harmony import */ var _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retryMiddleware */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js");









/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js":
/*!**********************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isStreamingPayload: () => (/* binding */ isStreamingPayload)
/* harmony export */ });
const isStreamingPayload = (request) => request?.body instanceof ReadableStream;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js":
/*!***************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOmitRetryHeadersPlugin: () => (/* binding */ getOmitRetryHeadersPlugin),
/* harmony export */   omitRetryHeadersMiddleware: () => (/* binding */ omitRetryHeadersMiddleware),
/* harmony export */   omitRetryHeadersMiddlewareOptions: () => (/* binding */ omitRetryHeadersMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-retry */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/index.js");


const omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
        delete request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.INVOCATION_ID_HEADER];
        delete request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_1__.REQUEST_HEADER];
    }
    return next(args);
};
const omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
const getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
    },
});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/retryDecider.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/retryDecider.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultRetryDecider: () => (/* binding */ defaultRetryDecider)
/* harmony export */ });
/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/service-error-classification */ "../nodejs/files/node_modules/@smithy/service-error-classification/dist-es/index.js");

const defaultRetryDecider = (error) => {
    if (!error) {
        return false;
    }
    return (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isRetryableByTrait)(error) || (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isClockSkewError)(error) || (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isThrottlingError)(error) || (0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isTransientError)(error);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRetryAfterHint: () => (/* binding */ getRetryAfterHint),
/* harmony export */   getRetryPlugin: () => (/* binding */ getRetryPlugin),
/* harmony export */   retryMiddleware: () => (/* binding */ retryMiddleware),
/* harmony export */   retryMiddlewareOptions: () => (/* binding */ retryMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/service-error-classification */ "../nodejs/files/node_modules/@smithy/service-error-classification/dist-es/index.js");
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js");
/* harmony import */ var _smithy_util_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-retry */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "../nodejs/files/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _isStreamingPayload_isStreamingPayload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isStreamingPayload/isStreamingPayload */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/util.js");







const retryMiddleware = (options) => (next, context) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        const isRequest = _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request);
        if (isRequest) {
            request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_3__.INVOCATION_ID_HEADER] = (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])();
        }
        while (true) {
            try {
                if (isRequest) {
                    request.headers[_smithy_util_retry__WEBPACK_IMPORTED_MODULE_3__.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                const { response, output } = await next(args);
                retryStrategy.recordSuccess(retryToken);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalRetryDelay;
                return { response, output };
            }
            catch (e) {
                const retryErrorInfo = getRetryErrorInfo(e);
                lastError = (0,_util__WEBPACK_IMPORTED_MODULE_5__.asSdkError)(e);
                if (isRequest && (0,_isStreamingPayload_isStreamingPayload__WEBPACK_IMPORTED_MODULE_4__.isStreamingPayload)(request)) {
                    (context.logger instanceof _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
                    throw lastError;
                }
                try {
                    retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
                }
                catch (refreshError) {
                    if (!lastError.$metadata) {
                        lastError.$metadata = {};
                    }
                    lastError.$metadata.attempts = attempts + 1;
                    lastError.$metadata.totalRetryDelay = totalRetryDelay;
                    throw lastError;
                }
                attempts = retryToken.getRetryCount();
                const delay = retryToken.getRetryDelay();
                totalRetryDelay += delay;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }
    else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
            context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
    }
};
const isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" &&
    typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" &&
    typeof retryStrategy.recordSuccess !== "undefined";
const getRetryErrorInfo = (error) => {
    const errorInfo = {
        error,
        errorType: getRetryErrorType(error),
    };
    const retryAfterHint = getRetryAfterHint(error.$response);
    if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
};
const getRetryErrorType = (error) => {
    if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isThrottlingError)(error))
        return "THROTTLING";
    if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isTransientError)(error))
        return "TRANSIENT";
    if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isServerError)(error))
        return "SERVER_ERROR";
    return "CLIENT_ERROR";
};
const retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    },
});
const getRetryAfterHint = (response) => {
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1000);
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/util.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-retry/dist-es/util.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asSdkError: () => (/* binding */ asSdkError)
/* harmony export */ });
const asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js":
/*!***********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deserializerMiddleware: () => (/* binding */ deserializerMiddleware)
/* harmony export */ });
const deserializerMiddleware = (options, deserializer) => (next) => async (args) => {
    const { response } = await next(args);
    try {
        const parsed = await deserializer(response, options);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
        });
        if (!("$metadata" in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            error.message += "\n  " + hint;
            if (typeof error.$responseBodyText !== "undefined") {
                if (error.$response) {
                    error.$response.body = error.$responseBodyText;
                }
            }
        }
        throw error;
    }
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/index.js":
/*!******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deserializerMiddleware: () => (/* reexport safe */ _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__.deserializerMiddleware),
/* harmony export */   deserializerMiddlewareOption: () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.deserializerMiddlewareOption),
/* harmony export */   getSerdePlugin: () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin),
/* harmony export */   serializerMiddleware: () => (/* reexport safe */ _serializerMiddleware__WEBPACK_IMPORTED_MODULE_2__.serializerMiddleware),
/* harmony export */   serializerMiddlewareOption: () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.serializerMiddlewareOption)
/* harmony export */ });
/* harmony import */ var _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserializerMiddleware */ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js");
/* harmony import */ var _serdePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serdePlugin */ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js");
/* harmony import */ var _serializerMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serializerMiddleware */ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deserializerMiddlewareOption: () => (/* binding */ deserializerMiddlewareOption),
/* harmony export */   getSerdePlugin: () => (/* binding */ getSerdePlugin),
/* harmony export */   serializerMiddlewareOption: () => (/* binding */ serializerMiddlewareOption)
/* harmony export */ });
/* harmony import */ var _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserializerMiddleware */ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js");
/* harmony import */ var _serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serializerMiddleware */ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js");


const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add((0,_deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__.deserializerMiddleware)(config, deserializer), deserializerMiddlewareOption);
            commandStack.add((0,_serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__.serializerMiddleware)(config, serializer), serializerMiddlewareOption);
        },
    };
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serializerMiddleware: () => (/* binding */ serializerMiddleware)
/* harmony export */ });
const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const endpoint = context.endpointV2?.url && options.urlParser
        ? async () => options.urlParser(context.endpointV2.url)
        : options.endpoint;
    if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
    }
    const request = await serializer(args.input, { ...options, endpoint });
    return next({
        ...args,
        request,
    });
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructStack: () => (/* binding */ constructStack)
/* harmony export */ });
const getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
        _aliases.push(name);
    }
    if (aliases) {
        for (const alias of aliases) {
            _aliases.push(alias);
        }
    }
    return _aliases;
};
const getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            const aliases = getAllAliases(entry.name, entry.aliases);
            if (aliases.includes(toRemove)) {
                isRemoved = true;
                for (const alias of aliases) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                for (const alias of getAllAliases(entry.name, entry.aliases)) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    if (debug) {
                        return;
                    }
                    throw new Error(`${entry.toMiddleware} is not found when adding ` +
                        `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` +
                        `middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain;
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = absoluteEntries[toOverrideIndex];
                        if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ` +
                                `${toOverride.priority} priority in ${toOverride.step} step cannot ` +
                                `be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ` +
                                `${entry.priority} priority in ${entry.step} step.`);
                        }
                        absoluteEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = relativeEntries[toOverrideIndex];
                        if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ` +
                                `${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                                `by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} ` +
                                `"${entry.toMiddleware}" middleware.`);
                        }
                        relativeEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name, aliases: _aliases } = entry;
                if (tags && tags.includes(toRemove)) {
                    const aliases = getAllAliases(name, _aliases);
                    for (const alias of aliases) {
                        entriesNameSet.delete(alias);
                    }
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
            return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
            return getMiddlewareList(true).map((mw) => {
                const step = mw.step ??
                    mw.relation +
                        " " +
                        mw.toMiddleware;
                return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
            });
        },
        identifyOnResolve(toggle) {
            if (typeof toggle === "boolean")
                identifyOnResolve = toggle;
            return identifyOnResolve;
        },
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList()
                .map((entry) => entry.middleware)
                .reverse()) {
                handler = middleware(handler, context);
            }
            if (identifyOnResolve) {
                console.log(stack.identify());
            }
            return handler;
        },
    };
    return stack;
};
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/middleware-stack/dist-es/index.js":
/*!******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/middleware-stack/dist-es/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructStack: () => (/* reexport safe */ _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__.constructStack)
/* harmony export */ });
/* harmony import */ var _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiddlewareStack */ "../nodejs/files/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js":
/*!**************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CredentialsProviderError: () => (/* binding */ CredentialsProviderError)
/* harmony export */ });
/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderError */ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/ProviderError.js");

class CredentialsProviderError extends _ProviderError__WEBPACK_IMPORTED_MODULE_0__.ProviderError {
    constructor(message, options = true) {
        super(message, options);
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/ProviderError.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/property-provider/dist-es/ProviderError.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProviderError: () => (/* binding */ ProviderError)
/* harmony export */ });
class ProviderError extends Error {
    constructor(message, options = true) {
        let logger;
        let tryNextLink = true;
        if (typeof options === "boolean") {
            logger = undefined;
            tryNextLink = options;
        }
        else if (options != null && typeof options === "object") {
            logger = options.logger;
            tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.name = "ProviderError";
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, ProviderError.prototype);
        logger?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
    }
    static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/TokenProviderError.js":
/*!********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/property-provider/dist-es/TokenProviderError.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenProviderError: () => (/* binding */ TokenProviderError)
/* harmony export */ });
/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderError */ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/ProviderError.js");

class TokenProviderError extends _ProviderError__WEBPACK_IMPORTED_MODULE_0__.ProviderError {
    constructor(message, options = true) {
        super(message, options);
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, TokenProviderError.prototype);
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/chain.js":
/*!*******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/property-provider/dist-es/chain.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chain: () => (/* binding */ chain)
/* harmony export */ });
/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderError */ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/ProviderError.js");

const chain = (...providers) => async () => {
    if (providers.length === 0) {
        throw new _ProviderError__WEBPACK_IMPORTED_MODULE_0__.ProviderError("No providers in chain");
    }
    let lastProviderError;
    for (const provider of providers) {
        try {
            const credentials = await provider();
            return credentials;
        }
        catch (err) {
            lastProviderError = err;
            if (err?.tryNextLink) {
                continue;
            }
            throw err;
        }
    }
    throw lastProviderError;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/fromStatic.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/property-provider/dist-es/fromStatic.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromStatic: () => (/* binding */ fromStatic)
/* harmony export */ });
const fromStatic = (staticValue) => () => Promise.resolve(staticValue);


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/index.js":
/*!*******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/property-provider/dist-es/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CredentialsProviderError: () => (/* reexport safe */ _CredentialsProviderError__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError),
/* harmony export */   ProviderError: () => (/* reexport safe */ _ProviderError__WEBPACK_IMPORTED_MODULE_1__.ProviderError),
/* harmony export */   TokenProviderError: () => (/* reexport safe */ _TokenProviderError__WEBPACK_IMPORTED_MODULE_2__.TokenProviderError),
/* harmony export */   chain: () => (/* reexport safe */ _chain__WEBPACK_IMPORTED_MODULE_3__.chain),
/* harmony export */   fromStatic: () => (/* reexport safe */ _fromStatic__WEBPACK_IMPORTED_MODULE_4__.fromStatic),
/* harmony export */   memoize: () => (/* reexport safe */ _memoize__WEBPACK_IMPORTED_MODULE_5__.memoize)
/* harmony export */ });
/* harmony import */ var _CredentialsProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CredentialsProviderError */ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js");
/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProviderError */ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/ProviderError.js");
/* harmony import */ var _TokenProviderError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TokenProviderError */ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/TokenProviderError.js");
/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chain */ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/chain.js");
/* harmony import */ var _fromStatic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fromStatic */ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/fromStatic.js");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memoize */ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/memoize.js");








/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/memoize.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/property-provider/dist-es/memoize.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoize: () => (/* binding */ memoize)
/* harmony export */ });
const memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/Field.js":
/*!***************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/protocol-http/dist-es/Field.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Field: () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ "../nodejs/files/node_modules/@smithy/types/dist-es/index.js");

class Field {
    constructor({ name, kind = _smithy_types__WEBPACK_IMPORTED_MODULE_0__.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
    }
    add(value) {
        this.values.push(value);
    }
    set(values) {
        this.values = values;
    }
    remove(value) {
        this.values = this.values.filter((v) => v !== value);
    }
    toString() {
        return this.values.map((v) => (v.includes(",") || v.includes(" ") ? `"${v}"` : v)).join(", ");
    }
    get() {
        return this.values;
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/Fields.js":
/*!****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/protocol-http/dist-es/Fields.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fields: () => (/* binding */ Fields)
/* harmony export */ });
class Fields {
    constructor({ fields = [], encoding = "utf-8" }) {
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
    }
    setField(field) {
        this.entries[field.name.toLowerCase()] = field;
    }
    getField(name) {
        return this.entries[name.toLowerCase()];
    }
    removeField(name) {
        delete this.entries[name.toLowerCase()];
    }
    getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js":
/*!***********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* binding */ getHttpHandlerExtensionConfiguration),
/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* binding */ resolveHttpHandlerRuntimeConfig)
/* harmony export */ });
const getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
    let httpHandler = runtimeConfig.httpHandler;
    return {
        setHttpHandler(handler) {
            httpHandler = handler;
        },
        httpHandler() {
            return httpHandler;
        },
        updateHttpClientConfig(key, value) {
            httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
            return httpHandler.httpHandlerConfigs();
        },
    };
};
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
    return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/extensions/index.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/protocol-http/dist-es/extensions/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),
/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpExtensionConfiguration */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/httpHandler.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/protocol-http/dist-es/httpHandler.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/httpRequest.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/protocol-http/dist-es/httpRequest.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpRequest: () => (/* binding */ HttpRequest)
/* harmony export */ });
class HttpRequest {
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
    }
    static clone(request) {
        const cloned = new HttpRequest({
            ...request,
            headers: { ...request.headers },
        });
        if (cloned.query) {
            cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
    }
    static isInstance(request) {
        if (!request) {
            return false;
        }
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        return HttpRequest.clone(this);
    }
}
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/httpResponse.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/protocol-http/dist-es/httpResponse.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpResponse: () => (/* binding */ HttpResponse)
/* harmony export */ });
class HttpResponse {
    constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js":
/*!***************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Field: () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_1__.Field),
/* harmony export */   Fields: () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_2__.Fields),
/* harmony export */   HttpRequest: () => (/* reexport safe */ _httpRequest__WEBPACK_IMPORTED_MODULE_4__.HttpRequest),
/* harmony export */   HttpResponse: () => (/* reexport safe */ _httpResponse__WEBPACK_IMPORTED_MODULE_5__.HttpResponse),
/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),
/* harmony export */   isValidHostname: () => (/* reexport safe */ _isValidHostname__WEBPACK_IMPORTED_MODULE_6__.isValidHostname),
/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/extensions/index.js");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/Field.js");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/Fields.js");
/* harmony import */ var _httpHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./httpHandler */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/httpHandler.js");
/* harmony import */ var _httpRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./httpRequest */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/httpRequest.js");
/* harmony import */ var _httpResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./httpResponse */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/httpResponse.js");
/* harmony import */ var _isValidHostname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isValidHostname */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/types.js");










/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidHostname: () => (/* binding */ isValidHostname)
/* harmony export */ });
function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/types.js":
/*!***************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/protocol-http/dist-es/types.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/querystring-builder/dist-es/index.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/querystring-builder/dist-es/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildQueryString: () => (/* binding */ buildQueryString)
/* harmony export */ });
/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-uri-escape */ "../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/index.js");

function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value[i])}`);
            }
        }
        else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/querystring-parser/dist-es/index.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/querystring-parser/dist-es/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseQueryString: () => (/* binding */ parseQueryString)
/* harmony export */ });
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/service-error-classification/dist-es/constants.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/service-error-classification/dist-es/constants.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLOCK_SKEW_ERROR_CODES: () => (/* binding */ CLOCK_SKEW_ERROR_CODES),
/* harmony export */   NODEJS_TIMEOUT_ERROR_CODES: () => (/* binding */ NODEJS_TIMEOUT_ERROR_CODES),
/* harmony export */   THROTTLING_ERROR_CODES: () => (/* binding */ THROTTLING_ERROR_CODES),
/* harmony export */   TRANSIENT_ERROR_CODES: () => (/* binding */ TRANSIENT_ERROR_CODES),
/* harmony export */   TRANSIENT_ERROR_STATUS_CODES: () => (/* binding */ TRANSIENT_ERROR_STATUS_CODES)
/* harmony export */ });
const CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
];
const THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
const TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
const TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/service-error-classification/dist-es/index.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/service-error-classification/dist-es/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isClockSkewCorrectedError: () => (/* binding */ isClockSkewCorrectedError),
/* harmony export */   isClockSkewError: () => (/* binding */ isClockSkewError),
/* harmony export */   isRetryableByTrait: () => (/* binding */ isRetryableByTrait),
/* harmony export */   isServerError: () => (/* binding */ isServerError),
/* harmony export */   isThrottlingError: () => (/* binding */ isThrottlingError),
/* harmony export */   isTransientError: () => (/* binding */ isTransientError)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/service-error-classification/dist-es/constants.js");

const isRetryableByTrait = (error) => error.$retryable !== undefined;
const isClockSkewError = (error) => _constants__WEBPACK_IMPORTED_MODULE_0__.CLOCK_SKEW_ERROR_CODES.includes(error.name);
const isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
const isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.THROTTLING_ERROR_CODES.includes(error.name) ||
    error.$retryable?.throttling == true;
const isTransientError = (error) => isClockSkewCorrectedError(error) ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.TRANSIENT_ERROR_CODES.includes(error.name) ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
const isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== undefined) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
        }
        return false;
    }
    return false;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderFormatter: () => (/* binding */ HeaderFormatter),
/* harmony export */   Int64: () => (/* binding */ Int64)
/* harmony export */ });
/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-hex-encoding */ "../nodejs/files/node_modules/@smithy/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-utf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/index.js");


class HeaderFormatter {
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
            const bytes = (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
                return Uint8Array.from([2, header.value]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set((0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.fromHex)(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
}
var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
class Int64 {
    constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9223372036854776000 || number < -9223372036854776000) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 0b10000000;
        if (negative) {
            negate(bytes);
        }
        return parseInt((0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function negate(bytes) {
    for (let i = 0; i < 8; i++) {
        bytes[i] ^= 0xff;
    }
    for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
            break;
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignatureV4: () => (/* binding */ SignatureV4)
/* harmony export */ });
/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-hex-encoding */ "../nodejs/files/node_modules/@smithy/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-middleware */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js");
/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-uri-escape */ "../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/index.js");
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-utf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/constants.js");
/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credentialDerivation */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js");
/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getCanonicalHeaders */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js");
/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getCanonicalQuery */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js");
/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getPayloadHash */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js");
/* harmony import */ var _HeaderFormatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderFormatter */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js");
/* harmony import */ var _headerUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./headerUtil */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/headerUtil.js");
/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./moveHeadersToQuery */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js");
/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./prepareRequest */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js");
/* harmony import */ var _utilDate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utilDate */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/utilDate.js");














class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.headerFormatter = new _HeaderFormatter__WEBPACK_IMPORTED_MODULE_9__.HeaderFormatter();
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)(region);
        this.credentialProvider = (0,_smithy_util_middleware__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > _constants__WEBPACK_IMPORTED_MODULE_4__.MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);
        const request = (0,_moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_11__.moveHeadersToQuery)((0,_prepareRequest__WEBPACK_IMPORTED_MODULE_12__.prepareRequest)(originalRequest), { unhoistableHeaders, hoistableHeaders });
        if (credentials.sessionToken) {
            request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_QUERY_PARAM] = _constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = (0,_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else if (toSign.message) {
            return this.signMessage(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);
        const hashedPayload = await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());
        const stringToSign = [
            _constants__WEBPACK_IMPORTED_MODULE_4__.EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body,
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature,
        });
        return promise.then((signature) => {
            return { message: signableMessage.message, signature };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(stringToSign));
        return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = (0,_prepareRequest__WEBPACK_IMPORTED_MODULE_12__.prepareRequest)(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);
        request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)(request, this.sha256);
        if (!(0,_headerUtil__WEBPACK_IMPORTED_MODULE_10__.hasHeader)(_constants__WEBPACK_IMPORTED_MODULE_4__.SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = (0,_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.AUTH_HEADER] =
            `${_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${(0,_getCanonicalQuery__WEBPACK_IMPORTED_MODULE_7__.getCanonicalQuery)(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if (pathSegment?.length === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = (0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_2__.escapeUri)(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(stringToSign));
        return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.getSigningKey)(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" ||
            typeof credentials.accessKeyId !== "string" ||
            typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
const formatDate = (now) => {
    const longDate = (0,_utilDate__WEBPACK_IMPORTED_MODULE_13__.iso8601)(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/constants.js":
/*!******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/constants.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALGORITHM_IDENTIFIER: () => (/* binding */ ALGORITHM_IDENTIFIER),
/* harmony export */   ALGORITHM_IDENTIFIER_V4A: () => (/* binding */ ALGORITHM_IDENTIFIER_V4A),
/* harmony export */   ALGORITHM_QUERY_PARAM: () => (/* binding */ ALGORITHM_QUERY_PARAM),
/* harmony export */   ALWAYS_UNSIGNABLE_HEADERS: () => (/* binding */ ALWAYS_UNSIGNABLE_HEADERS),
/* harmony export */   AMZ_DATE_HEADER: () => (/* binding */ AMZ_DATE_HEADER),
/* harmony export */   AMZ_DATE_QUERY_PARAM: () => (/* binding */ AMZ_DATE_QUERY_PARAM),
/* harmony export */   AUTH_HEADER: () => (/* binding */ AUTH_HEADER),
/* harmony export */   CREDENTIAL_QUERY_PARAM: () => (/* binding */ CREDENTIAL_QUERY_PARAM),
/* harmony export */   DATE_HEADER: () => (/* binding */ DATE_HEADER),
/* harmony export */   EVENT_ALGORITHM_IDENTIFIER: () => (/* binding */ EVENT_ALGORITHM_IDENTIFIER),
/* harmony export */   EXPIRES_QUERY_PARAM: () => (/* binding */ EXPIRES_QUERY_PARAM),
/* harmony export */   GENERATED_HEADERS: () => (/* binding */ GENERATED_HEADERS),
/* harmony export */   HOST_HEADER: () => (/* binding */ HOST_HEADER),
/* harmony export */   KEY_TYPE_IDENTIFIER: () => (/* binding */ KEY_TYPE_IDENTIFIER),
/* harmony export */   MAX_CACHE_SIZE: () => (/* binding */ MAX_CACHE_SIZE),
/* harmony export */   MAX_PRESIGNED_TTL: () => (/* binding */ MAX_PRESIGNED_TTL),
/* harmony export */   PROXY_HEADER_PATTERN: () => (/* binding */ PROXY_HEADER_PATTERN),
/* harmony export */   REGION_SET_PARAM: () => (/* binding */ REGION_SET_PARAM),
/* harmony export */   SEC_HEADER_PATTERN: () => (/* binding */ SEC_HEADER_PATTERN),
/* harmony export */   SHA256_HEADER: () => (/* binding */ SHA256_HEADER),
/* harmony export */   SIGNATURE_HEADER: () => (/* binding */ SIGNATURE_HEADER),
/* harmony export */   SIGNATURE_QUERY_PARAM: () => (/* binding */ SIGNATURE_QUERY_PARAM),
/* harmony export */   SIGNED_HEADERS_QUERY_PARAM: () => (/* binding */ SIGNED_HEADERS_QUERY_PARAM),
/* harmony export */   TOKEN_HEADER: () => (/* binding */ TOKEN_HEADER),
/* harmony export */   TOKEN_QUERY_PARAM: () => (/* binding */ TOKEN_QUERY_PARAM),
/* harmony export */   UNSIGNABLE_PATTERNS: () => (/* binding */ UNSIGNABLE_PATTERNS),
/* harmony export */   UNSIGNED_PAYLOAD: () => (/* binding */ UNSIGNED_PAYLOAD)
/* harmony export */ });
const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const REGION_SET_PARAM = "X-Amz-Region-Set";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const HOST_HEADER = "host";
const ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCredentialCache: () => (/* binding */ clearCredentialCache),
/* harmony export */   createScope: () => (/* binding */ createScope),
/* harmony export */   getSigningKey: () => (/* binding */ getSigningKey)
/* harmony export */ });
/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-hex-encoding */ "../nodejs/files/node_modules/@smithy/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-utf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/constants.js");



const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${_constants__WEBPACK_IMPORTED_MODULE_2__.KEY_TYPE_IDENTIFIER}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${(0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > _constants__WEBPACK_IMPORTED_MODULE_2__.MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, _constants__WEBPACK_IMPORTED_MODULE_2__.KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
const clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
    });
};
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.toUint8Array)(data));
    return hash.digest();
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCanonicalHeaders: () => (/* binding */ getCanonicalHeaders)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/constants.js");

const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in _constants__WEBPACK_IMPORTED_MODULE_0__.ALWAYS_UNSIGNABLE_HEADERS ||
            unsignableHeaders?.has(canonicalHeaderName) ||
            _constants__WEBPACK_IMPORTED_MODULE_0__.PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            _constants__WEBPACK_IMPORTED_MODULE_0__.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCanonicalQuery: () => (/* binding */ getCanonicalQuery)
/* harmony export */ });
/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-uri-escape */ "../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/constants.js");


const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query)) {
        if (key.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_1__.SIGNATURE_HEADER) {
            continue;
        }
        const encodedKey = (0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key);
        keys.push(encodedKey);
        const value = query[key];
        if (typeof value === "string") {
            serialized[encodedKey] = `${encodedKey}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[encodedKey] = value
                .slice(0)
                .reduce((encoded, value) => encoded.concat([`${encodedKey}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`]), [])
                .sort()
                .join("&");
        }
    }
    return keys
        .sort()
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js":
/*!***********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPayloadHash: () => (/* binding */ getPayloadHash)
/* harmony export */ });
/* harmony import */ var _smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/is-array-buffer */ "../nodejs/files/node_modules/@smithy/is-array-buffer/dist-es/index.js");
/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-hex-encoding */ "../nodejs/files/node_modules/@smithy/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-utf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/constants.js");




const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_3__.SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || (0,_smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_2__.toUint8Array)(body));
        return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__.toHex)(await hashCtor.digest());
    }
    return _constants__WEBPACK_IMPORTED_MODULE_3__.UNSIGNED_PAYLOAD;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/headerUtil.js":
/*!*******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/headerUtil.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteHeader: () => (/* binding */ deleteHeader),
/* harmony export */   getHeaderValue: () => (/* binding */ getHeaderValue),
/* harmony export */   hasHeader: () => (/* binding */ hasHeader)
/* harmony export */ });
const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
const getHeaderValue = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
const deleteHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/index.js":
/*!**************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignatureV4: () => (/* reexport safe */ _SignatureV4__WEBPACK_IMPORTED_MODULE_0__.SignatureV4),
/* harmony export */   clearCredentialCache: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.clearCredentialCache),
/* harmony export */   createScope: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.createScope),
/* harmony export */   getCanonicalHeaders: () => (/* reexport safe */ _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_1__.getCanonicalHeaders),
/* harmony export */   getCanonicalQuery: () => (/* reexport safe */ _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_2__.getCanonicalQuery),
/* harmony export */   getPayloadHash: () => (/* reexport safe */ _getPayloadHash__WEBPACK_IMPORTED_MODULE_3__.getPayloadHash),
/* harmony export */   getSigningKey: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.getSigningKey),
/* harmony export */   moveHeadersToQuery: () => (/* reexport safe */ _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_4__.moveHeadersToQuery),
/* harmony export */   prepareRequest: () => (/* reexport safe */ _prepareRequest__WEBPACK_IMPORTED_MODULE_5__.prepareRequest)
/* harmony export */ });
/* harmony import */ var _SignatureV4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignatureV4 */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js");
/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCanonicalHeaders */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js");
/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCanonicalQuery */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js");
/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getPayloadHash */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js");
/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moveHeadersToQuery */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js");
/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prepareRequest */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js");
/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credentialDerivation */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js");









/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveHeadersToQuery: () => (/* binding */ moveHeadersToQuery)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");

const moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.clone(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if ((lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) ||
            options.hoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js":
/*!***********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareRequest: () => (/* binding */ prepareRequest)
/* harmony export */ });
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ "../nodejs/files/node_modules/@smithy/protocol-http/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/constants.js");


const prepareRequest = (request) => {
    request = _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.clone(request);
    for (const headerName of Object.keys(request.headers)) {
        if (_constants__WEBPACK_IMPORTED_MODULE_1__.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/signature-v4/dist-es/utilDate.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/signature-v4/dist-es/utilDate.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iso8601: () => (/* binding */ iso8601),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
const iso8601 = (time) => toDate(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoOpLogger: () => (/* binding */ NoOpLogger)
/* harmony export */ });
class NoOpLogger {
    trace() { }
    debug() { }
    info() { }
    warn() { }
    error() { }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/client.js":
/*!****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/client.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Client: () => (/* binding */ Client)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-stack */ "../nodejs/files/node_modules/@smithy/middleware-stack/dist-es/index.js");

class Client {
    constructor(config) {
        this.config = config;
        this.middlewareStack = (0,_smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__.constructStack)();
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const useHandlerCache = options === undefined && this.config.cacheMiddleware === true;
        let handler;
        if (useHandlerCache) {
            if (!this.handlers) {
                this.handlers = new WeakMap();
            }
            const handlers = this.handlers;
            if (handlers.has(command.constructor)) {
                handler = handlers.get(command.constructor);
            }
            else {
                handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
                handlers.set(command.constructor, handler);
            }
        }
        else {
            delete this.handlers;
            handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        }
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(() => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        this.config?.requestHandler?.destroy?.();
        delete this.handlers;
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectBody: () => (/* reexport safe */ _smithy_core_protocols__WEBPACK_IMPORTED_MODULE_0__.collectBody)
/* harmony export */ });
/* harmony import */ var _smithy_core_protocols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core/protocols */ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/index.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/command.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/command.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Command: () => (/* binding */ Command)
/* harmony export */ });
/* harmony import */ var _smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/middleware-stack */ "../nodejs/files/node_modules/@smithy/middleware-stack/dist-es/index.js");
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/types */ "../nodejs/files/node_modules/@smithy/types/dist-es/index.js");


class Command {
    constructor() {
        this.middlewareStack = (0,_smithy_middleware_stack__WEBPACK_IMPORTED_MODULE_0__.constructStack)();
    }
    static classBuilder() {
        return new ClassBuilder();
    }
    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor, }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
            this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog,
            outputFilterSensitiveLog,
            [_smithy_types__WEBPACK_IMPORTED_MODULE_1__.SMITHY_CONTEXT_KEY]: {
                commandInstance: this,
                ...smithyContext,
            },
            ...additionalContext,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
}
class ClassBuilder {
    constructor() {
        this._init = () => { };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_) => _;
        this._outputFilterSensitiveLog = (_) => _;
        this._serializer = null;
        this._deserializer = null;
    }
    init(cb) {
        this._init = cb;
    }
    ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
    }
    m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
    }
    s(service, operation, smithyContext = {}) {
        this._smithyContext = {
            service,
            operation,
            ...smithyContext,
        };
        return this;
    }
    c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
    }
    n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
    }
    f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
    }
    ser(serializer) {
        this._serializer = serializer;
        return this;
    }
    de(deserializer) {
        this._deserializer = deserializer;
        return this;
    }
    build() {
        const closure = this;
        let CommandRef;
        return (CommandRef = class extends Command {
            static getEndpointParameterInstructions() {
                return closure._ep;
            }
            constructor(...[input]) {
                super();
                this.serialize = closure._serializer;
                this.deserialize = closure._deserializer;
                this.input = input ?? {};
                closure._init(this);
            }
            resolveMiddleware(stack, configuration, options) {
                return this.resolveMiddlewareWithContext(stack, configuration, options, {
                    CommandCtor: CommandRef,
                    middlewareFn: closure._middlewareFn,
                    clientName: closure._clientName,
                    commandName: closure._commandName,
                    inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
                    outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
                    smithyContext: closure._smithyContext,
                    additionalContext: closure._additionalContext,
                });
            }
        });
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/constants.js":
/*!*******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/constants.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SENSITIVE_STRING: () => (/* binding */ SENSITIVE_STRING)
/* harmony export */ });
const SENSITIVE_STRING = "***SensitiveInformation***";


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAggregatedClient: () => (/* binding */ createAggregatedClient)
/* harmony export */ });
const createAggregatedClient = (commands, Client) => {
    for (const command of Object.keys(commands)) {
        const CommandCtor = commands[command];
        const methodImpl = async function (args, optionsOrCb, cb) {
            const command = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
                this.send(command, optionsOrCb);
            }
            else if (typeof cb === "function") {
                if (typeof optionsOrCb !== "object")
                    throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
                this.send(command, optionsOrCb || {}, cb);
            }
            else {
                return this.send(command, optionsOrCb);
            }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client.prototype[methodName] = methodImpl;
    }
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/date-utils.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/date-utils.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateToUtcString: () => (/* binding */ dateToUtcString),
/* harmony export */   parseEpochTimestamp: () => (/* binding */ parseEpochTimestamp),
/* harmony export */   parseRfc3339DateTime: () => (/* binding */ parseRfc3339DateTime),
/* harmony export */   parseRfc3339DateTimeWithOffset: () => (/* binding */ parseRfc3339DateTimeWithOffset),
/* harmony export */   parseRfc7231DateTime: () => (/* binding */ parseRfc7231DateTime)
/* harmony export */ });
/* harmony import */ var _parse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-utils */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/parse-utils.js");

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const parseRfc3339DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
};
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date;
};
const IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
const parseRfc7231DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate((0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds,
        }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate((0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
const parseEpochTimestamp = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    }
    else if (typeof value === "string") {
        valueAsDouble = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseDouble)(value);
    }
    else if (typeof value === "object" && value.tag === 1) {
        valueAsDouble = value.value;
    }
    else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
const buildDate = (year, month, day, time) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value) => {
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;
const adjustRfc850Year = (input) => {
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const validateDayOfMonth = (year, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
    const dateVal = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseByte)(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }
    return (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseFloat32)("0." + value) * 1000;
};
const parseOffsetToMilliseconds = (value) => {
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
        direction = 1;
    }
    else if (directionStr == "-") {
        direction = -1;
    }
    else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
};
const stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/default-error-handler.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/default-error-handler.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throwDefaultError: () => (/* binding */ throwDefaultError),
/* harmony export */   withBaseException: () => (/* binding */ withBaseException)
/* harmony export */ });
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exceptions */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/exceptions.js");

const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
    });
    throw (0,_exceptions__WEBPACK_IMPORTED_MODULE_0__.decorateServiceException)(response, parsedBody);
};
const withBaseException = (ExceptionCtor) => {
    return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
    };
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js":
/*!***********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadConfigsForDefaultMode: () => (/* binding */ loadConfigsForDefaultMode)
/* harmony export */ });
const loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100,
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000,
            };
        default:
            return {};
    }
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js":
/*!*****************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emitWarningIfUnsupportedVersion: () => (/* binding */ emitWarningIfUnsupportedVersion)
/* harmony export */ });
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
    }
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/exceptions.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/exceptions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceException: () => (/* binding */ ServiceException),
/* harmony export */   decorateServiceException: () => (/* binding */ decorateServiceException)
/* harmony export */ });
class ServiceException extends Error {
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js":
/*!***************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extendedEncodeURIComponent: () => (/* reexport safe */ _smithy_core_protocols__WEBPACK_IMPORTED_MODULE_0__.extendedEncodeURIComponent)
/* harmony export */ });
/* harmony import */ var _smithy_core_protocols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core/protocols */ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/index.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmId: () => (/* reexport safe */ _smithy_types__WEBPACK_IMPORTED_MODULE_0__.AlgorithmId),
/* harmony export */   getChecksumConfiguration: () => (/* binding */ getChecksumConfiguration),
/* harmony export */   resolveChecksumRuntimeConfig: () => (/* binding */ resolveChecksumRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ "../nodejs/files/node_modules/@smithy/types/dist-es/index.js");


const getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    for (const id in _smithy_types__WEBPACK_IMPORTED_MODULE_0__.AlgorithmId) {
        const algorithmId = _smithy_types__WEBPACK_IMPORTED_MODULE_0__.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === undefined) {
            continue;
        }
        checksumAlgorithms.push({
            algorithmId: () => algorithmId,
            checksumConstructor: () => runtimeConfig[algorithmId],
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return this._checksumAlgorithms;
        },
    };
};
const resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js":
/*!**************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultClientConfiguration: () => (/* binding */ getDefaultClientConfiguration),
/* harmony export */   getDefaultExtensionConfiguration: () => (/* binding */ getDefaultExtensionConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* binding */ resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checksum */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js");
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retry */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js");


const getDefaultExtensionConfiguration = (runtimeConfig) => {
    return {
        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.getChecksumConfiguration)(runtimeConfig),
        ...(0,_retry__WEBPACK_IMPORTED_MODULE_1__.getRetryConfiguration)(runtimeConfig),
    };
};
const getDefaultClientConfiguration = getDefaultExtensionConfiguration;
const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.resolveChecksumRuntimeConfig)(config),
        ...(0,_retry__WEBPACK_IMPORTED_MODULE_1__.resolveRetryRuntimeConfig)(config),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/index.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultClientConfiguration),
/* harmony export */   getDefaultExtensionConfiguration: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultExtensionConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultExtensionConfiguration */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRetryConfiguration: () => (/* binding */ getRetryConfiguration),
/* harmony export */   resolveRetryRuntimeConfig: () => (/* binding */ resolveRetryRuntimeConfig)
/* harmony export */ });
const getRetryConfiguration = (runtimeConfig) => {
    let _retryStrategy = runtimeConfig.retryStrategy;
    return {
        setRetryStrategy(retryStrategy) {
            _retryStrategy = retryStrategy;
        },
        retryStrategy() {
            return _retryStrategy;
        },
    };
};
const resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArrayIfSingleItem: () => (/* binding */ getArrayIfSingleItem)
/* harmony export */ });
const getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueFromTextNode: () => (/* binding */ getValueFromTextNode)
/* harmony export */ });
const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js":
/*!***************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Client: () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_0__.Client),
/* harmony export */   Command: () => (/* reexport safe */ _command__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   LazyJsonString: () => (/* reexport safe */ _lazy_json__WEBPACK_IMPORTED_MODULE_15__.LazyJsonString),
/* harmony export */   NoOpLogger: () => (/* reexport safe */ _NoOpLogger__WEBPACK_IMPORTED_MODULE_16__.NoOpLogger),
/* harmony export */   SENSITIVE_STRING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.SENSITIVE_STRING),
/* harmony export */   ServiceException: () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_9__.ServiceException),
/* harmony export */   StringWrapper: () => (/* reexport safe */ _lazy_json__WEBPACK_IMPORTED_MODULE_15__.StringWrapper),
/* harmony export */   _json: () => (/* reexport safe */ _serde_json__WEBPACK_IMPORTED_MODULE_22__._json),
/* harmony export */   collectBody: () => (/* reexport safe */ _collect_stream_body__WEBPACK_IMPORTED_MODULE_1__.collectBody),
/* harmony export */   convertMap: () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_17__.convertMap),
/* harmony export */   createAggregatedClient: () => (/* reexport safe */ _create_aggregated_client__WEBPACK_IMPORTED_MODULE_4__.createAggregatedClient),
/* harmony export */   dateToUtcString: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_5__.dateToUtcString),
/* harmony export */   decorateServiceException: () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_9__.decorateServiceException),
/* harmony export */   emitWarningIfUnsupportedVersion: () => (/* reexport safe */ _emitWarningIfUnsupportedVersion__WEBPACK_IMPORTED_MODULE_8__.emitWarningIfUnsupportedVersion),
/* harmony export */   expectBoolean: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectBoolean),
/* harmony export */   expectByte: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectByte),
/* harmony export */   expectFloat32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectFloat32),
/* harmony export */   expectInt: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectInt),
/* harmony export */   expectInt32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectInt32),
/* harmony export */   expectLong: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectLong),
/* harmony export */   expectNonNull: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectNonNull),
/* harmony export */   expectNumber: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectNumber),
/* harmony export */   expectObject: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectObject),
/* harmony export */   expectShort: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectShort),
/* harmony export */   expectString: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectString),
/* harmony export */   expectUnion: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.expectUnion),
/* harmony export */   extendedEncodeURIComponent: () => (/* reexport safe */ _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_10__.extendedEncodeURIComponent),
/* harmony export */   getArrayIfSingleItem: () => (/* reexport safe */ _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_12__.getArrayIfSingleItem),
/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_11__.getDefaultClientConfiguration),
/* harmony export */   getDefaultExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_11__.getDefaultExtensionConfiguration),
/* harmony export */   getValueFromTextNode: () => (/* reexport safe */ _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_13__.getValueFromTextNode),
/* harmony export */   handleFloat: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.handleFloat),
/* harmony export */   isSerializableHeaderValue: () => (/* reexport safe */ _is_serializable_header_value__WEBPACK_IMPORTED_MODULE_14__.isSerializableHeaderValue),
/* harmony export */   limitedParseDouble: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.limitedParseDouble),
/* harmony export */   limitedParseFloat: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.limitedParseFloat),
/* harmony export */   limitedParseFloat32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.limitedParseFloat32),
/* harmony export */   loadConfigsForDefaultMode: () => (/* reexport safe */ _defaults_mode__WEBPACK_IMPORTED_MODULE_7__.loadConfigsForDefaultMode),
/* harmony export */   logger: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.logger),
/* harmony export */   map: () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_17__.map),
/* harmony export */   parseBoolean: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.parseBoolean),
/* harmony export */   parseEpochTimestamp: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_5__.parseEpochTimestamp),
/* harmony export */   parseRfc3339DateTime: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_5__.parseRfc3339DateTime),
/* harmony export */   parseRfc3339DateTimeWithOffset: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_5__.parseRfc3339DateTimeWithOffset),
/* harmony export */   parseRfc7231DateTime: () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_5__.parseRfc7231DateTime),
/* harmony export */   quoteHeader: () => (/* reexport safe */ _quote_header__WEBPACK_IMPORTED_MODULE_19__.quoteHeader),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_11__.resolveDefaultRuntimeConfig),
/* harmony export */   resolvedPath: () => (/* reexport safe */ _resolve_path__WEBPACK_IMPORTED_MODULE_20__.resolvedPath),
/* harmony export */   serializeDateTime: () => (/* reexport safe */ _ser_utils__WEBPACK_IMPORTED_MODULE_21__.serializeDateTime),
/* harmony export */   serializeFloat: () => (/* reexport safe */ _ser_utils__WEBPACK_IMPORTED_MODULE_21__.serializeFloat),
/* harmony export */   splitEvery: () => (/* reexport safe */ _split_every__WEBPACK_IMPORTED_MODULE_23__.splitEvery),
/* harmony export */   splitHeader: () => (/* reexport safe */ _split_header__WEBPACK_IMPORTED_MODULE_24__.splitHeader),
/* harmony export */   strictParseByte: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.strictParseByte),
/* harmony export */   strictParseDouble: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.strictParseDouble),
/* harmony export */   strictParseFloat: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.strictParseFloat),
/* harmony export */   strictParseFloat32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.strictParseFloat32),
/* harmony export */   strictParseInt: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.strictParseInt),
/* harmony export */   strictParseInt32: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.strictParseInt32),
/* harmony export */   strictParseLong: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.strictParseLong),
/* harmony export */   strictParseShort: () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_18__.strictParseShort),
/* harmony export */   take: () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_17__.take),
/* harmony export */   throwDefaultError: () => (/* reexport safe */ _default_error_handler__WEBPACK_IMPORTED_MODULE_6__.throwDefaultError),
/* harmony export */   withBaseException: () => (/* reexport safe */ _default_error_handler__WEBPACK_IMPORTED_MODULE_6__.withBaseException)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/client.js");
/* harmony import */ var _collect_stream_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collect-stream-body */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/command.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/constants.js");
/* harmony import */ var _create_aggregated_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-aggregated-client */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js");
/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-utils */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/date-utils.js");
/* harmony import */ var _default_error_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-error-handler */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/default-error-handler.js");
/* harmony import */ var _defaults_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaults-mode */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js");
/* harmony import */ var _emitWarningIfUnsupportedVersion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emitWarningIfUnsupportedVersion */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js");
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exceptions */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/exceptions.js");
/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extended-encode-uri-component */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./extensions */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/extensions/index.js");
/* harmony import */ var _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./get-array-if-single-item */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js");
/* harmony import */ var _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-value-from-text-node */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js");
/* harmony import */ var _is_serializable_header_value__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./is-serializable-header-value */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js");
/* harmony import */ var _lazy_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lazy-json */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/lazy-json.js");
/* harmony import */ var _NoOpLogger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./NoOpLogger */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js");
/* harmony import */ var _object_mapping__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object-mapping */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/object-mapping.js");
/* harmony import */ var _parse_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parse-utils */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/parse-utils.js");
/* harmony import */ var _quote_header__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quote-header */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/quote-header.js");
/* harmony import */ var _resolve_path__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./resolve-path */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/resolve-path.js");
/* harmony import */ var _ser_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ser-utils */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/ser-utils.js");
/* harmony import */ var _serde_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./serde-json */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/serde-json.js");
/* harmony import */ var _split_every__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./split-every */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/split-every.js");
/* harmony import */ var _split_header__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./split-header */ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/split-header.js");



























/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js":
/*!**************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSerializableHeaderValue: () => (/* binding */ isSerializableHeaderValue)
/* harmony export */ });
const isSerializableHeaderValue = (value) => {
    return value != null;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/lazy-json.js":
/*!*******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/lazy-json.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyJsonString: () => (/* binding */ LazyJsonString),
/* harmony export */   StringWrapper: () => (/* binding */ StringWrapper)
/* harmony export */ });
const StringWrapper = function () {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [null, ...arguments]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(StringWrapper, String);
class LazyJsonString extends StringWrapper {
    deserializeJSON() {
        return JSON.parse(super.toString());
    }
    toJSON() {
        return super.toString();
    }
    static fromObject(object) {
        if (object instanceof LazyJsonString) {
            return object;
        }
        else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/object-mapping.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/object-mapping.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertMap: () => (/* binding */ convertMap),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   take: () => (/* binding */ take)
/* harmony export */ });
function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    }
    else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        }
        else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        applyInstruction(target, null, instructions, key);
    }
    return target;
}
const convertMap = (target) => {
    const output = {};
    for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
    }
    return output;
};
const take = (source, instructions) => {
    const out = {};
    for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
    }
    return out;
};
const mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
            _instructions[key] = value;
        }
        else {
            if (typeof value === "function") {
                _instructions[key] = [filter, value()];
            }
            else {
                _instructions[key] = [filter, value];
            }
        }
        return _instructions;
    }, {}));
};
const applyInstruction = (target, source, instructions, targetKey) => {
    if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
            instruction = [, instruction];
        }
        const [filter = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if ((typeof filter === "function" && filter(source[sourceKey])) || (typeof filter !== "function" && !!filter)) {
            target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
    }
    let [filter, value] = instructions[targetKey];
    if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === undefined && (_value = value()) != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed) {
            target[targetKey] = _value;
        }
        else if (customFilterPassed) {
            target[targetKey] = value();
        }
    }
    else {
        const defaultFilterPassed = filter === undefined && value != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed || customFilterPassed) {
            target[targetKey] = value;
        }
    }
};
const nonNullish = (_) => _ != null;
const pass = (_) => _;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/parse-utils.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/parse-utils.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectBoolean: () => (/* binding */ expectBoolean),
/* harmony export */   expectByte: () => (/* binding */ expectByte),
/* harmony export */   expectFloat32: () => (/* binding */ expectFloat32),
/* harmony export */   expectInt: () => (/* binding */ expectInt),
/* harmony export */   expectInt32: () => (/* binding */ expectInt32),
/* harmony export */   expectLong: () => (/* binding */ expectLong),
/* harmony export */   expectNonNull: () => (/* binding */ expectNonNull),
/* harmony export */   expectNumber: () => (/* binding */ expectNumber),
/* harmony export */   expectObject: () => (/* binding */ expectObject),
/* harmony export */   expectShort: () => (/* binding */ expectShort),
/* harmony export */   expectString: () => (/* binding */ expectString),
/* harmony export */   expectUnion: () => (/* binding */ expectUnion),
/* harmony export */   handleFloat: () => (/* binding */ handleFloat),
/* harmony export */   limitedParseDouble: () => (/* binding */ limitedParseDouble),
/* harmony export */   limitedParseFloat: () => (/* binding */ limitedParseFloat),
/* harmony export */   limitedParseFloat32: () => (/* binding */ limitedParseFloat32),
/* harmony export */   logger: () => (/* binding */ logger),
/* harmony export */   parseBoolean: () => (/* binding */ parseBoolean),
/* harmony export */   strictParseByte: () => (/* binding */ strictParseByte),
/* harmony export */   strictParseDouble: () => (/* binding */ strictParseDouble),
/* harmony export */   strictParseFloat: () => (/* binding */ strictParseFloat),
/* harmony export */   strictParseFloat32: () => (/* binding */ strictParseFloat32),
/* harmony export */   strictParseInt: () => (/* binding */ strictParseInt),
/* harmony export */   strictParseInt32: () => (/* binding */ strictParseInt32),
/* harmony export */   strictParseLong: () => (/* binding */ strictParseLong),
/* harmony export */   strictParseShort: () => (/* binding */ strictParseShort)
/* harmony export */ });
const parseBoolean = (value) => {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error(`Unable to parse boolean value "${value}"`);
    }
};
const expectBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
            return false;
        }
        if (value === 1) {
            return true;
        }
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
            return false;
        }
        if (lower === "true") {
            return true;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
};
const expectNumber = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
                logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
        }
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value) => {
    const expected = expectNumber(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
const expectLong = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
const expectInt = expectLong;
const expectInt32 = (value) => expectSizedInt(value, 32);
const expectShort = (value) => expectSizedInt(value, 16);
const expectByte = (value) => expectSizedInt(value, 8);
const expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size) => {
    switch (size) {
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
const expectObject = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
const expectString = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
};
const expectUnion = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = expectObject(value);
    const setKeys = Object.entries(asObject)
        .filter(([, v]) => v != null)
        .map(([k]) => k);
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
const strictParseDouble = (value) => {
    if (typeof value == "string") {
        return expectNumber(parseNumber(value));
    }
    return expectNumber(value);
};
const strictParseFloat = strictParseDouble;
const strictParseFloat32 = (value) => {
    if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
};
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectNumber(value);
};
const handleFloat = limitedParseDouble;
const limitedParseFloat = limitedParseDouble;
const limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectFloat32(value);
};
const parseFloatString = (value) => {
    switch (value) {
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseLong = (value) => {
    if (typeof value === "string") {
        return expectLong(parseNumber(value));
    }
    return expectLong(value);
};
const strictParseInt = strictParseLong;
const strictParseInt32 = (value) => {
    if (typeof value === "string") {
        return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
};
const strictParseShort = (value) => {
    if (typeof value === "string") {
        return expectShort(parseNumber(value));
    }
    return expectShort(value);
};
const strictParseByte = (value) => {
    if (typeof value === "string") {
        return expectByte(parseNumber(value));
    }
    return expectByte(value);
};
const stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message)
        .split("\n")
        .slice(0, 5)
        .filter((s) => !s.includes("stackTraceWarning"))
        .join("\n");
};
const logger = {
    warn: console.warn,
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/quote-header.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/quote-header.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quoteHeader: () => (/* binding */ quoteHeader)
/* harmony export */ });
function quoteHeader(part) {
    if (part.includes(",") || part.includes('"')) {
        part = `"${part.replace(/"/g, '\\"')}"`;
    }
    return part;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/resolve-path.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/resolve-path.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolvedPath: () => (/* reexport safe */ _smithy_core_protocols__WEBPACK_IMPORTED_MODULE_0__.resolvedPath)
/* harmony export */ });
/* harmony import */ var _smithy_core_protocols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/core/protocols */ "../nodejs/files/node_modules/@smithy/core/dist-es/submodules/protocols/index.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/ser-utils.js":
/*!*******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/ser-utils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serializeDateTime: () => (/* binding */ serializeDateTime),
/* harmony export */   serializeFloat: () => (/* binding */ serializeFloat)
/* harmony export */ });
const serializeFloat = (value) => {
    if (value !== value) {
        return "NaN";
    }
    switch (value) {
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};
const serializeDateTime = (date) => date.toISOString().replace(".000Z", "Z");


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/serde-json.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/serde-json.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _json: () => (/* binding */ _json)
/* harmony export */ });
const _json = (obj) => {
    if (obj == null) {
        return {};
    }
    if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
    }
    if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
                continue;
            }
            target[key] = _json(obj[key]);
        }
        return target;
    }
    return obj;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/split-every.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/split-every.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splitEvery: () => (/* binding */ splitEvery)
/* harmony export */ });
function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
        return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for (let i = 0; i < segments.length; i++) {
        if (currentSegment === "") {
            currentSegment = segments[i];
        }
        else {
            currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
            compoundSegments.push(currentSegment);
            currentSegment = "";
        }
    }
    if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
    }
    return compoundSegments;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/smithy-client/dist-es/split-header.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/smithy-client/dist-es/split-header.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splitHeader: () => (/* binding */ splitHeader)
/* harmony export */ });
const splitHeader = (value) => {
    const z = value.length;
    const values = [];
    let withinQuotes = false;
    let prevChar = undefined;
    let anchor = 0;
    for (let i = 0; i < z; ++i) {
        const char = value[i];
        switch (char) {
            case `"`:
                if (prevChar !== "\\") {
                    withinQuotes = !withinQuotes;
                }
                break;
            case ",":
                if (!withinQuotes) {
                    values.push(value.slice(anchor, i));
                    anchor = i + 1;
                }
                break;
            default:
        }
        prevChar = char;
    }
    values.push(value.slice(anchor));
    return values.map((v) => {
        v = v.trim();
        const z = v.length;
        if (z < 2) {
            return v;
        }
        if (v[0] === `"` && v[z - 1] === `"`) {
            v = v.slice(1, z - 1);
        }
        return v.replace(/\\"/g, '"');
    });
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/abort.js":
/*!*******************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/abort.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpApiKeyAuthLocation: () => (/* binding */ HttpApiKeyAuthLocation)
/* harmony export */ });
var HttpApiKeyAuthLocation;
(function (HttpApiKeyAuthLocation) {
    HttpApiKeyAuthLocation["HEADER"] = "header";
    HttpApiKeyAuthLocation["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpSigner.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpSigner.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/auth.js":
/*!***********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/auth/auth.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpAuthLocation: () => (/* binding */ HttpAuthLocation)
/* harmony export */ });
var HttpAuthLocation;
(function (HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/index.js":
/*!************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/auth/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpApiKeyAuthLocation: () => (/* reexport safe */ _HttpApiKeyAuth__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation),
/* harmony export */   HttpAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.HttpAuthLocation)
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/auth.js");
/* harmony import */ var _HttpApiKeyAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpApiKeyAuth */ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js");
/* harmony import */ var _HttpAuthScheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HttpAuthScheme */ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js");
/* harmony import */ var _HttpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HttpAuthSchemeProvider */ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js");
/* harmony import */ var _HttpSigner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HttpSigner */ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/HttpSigner.js");
/* harmony import */ var _IdentityProviderConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IdentityProviderConfig */ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js");








/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/checksum.js":
/*!**********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/checksum.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/client.js":
/*!********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/client.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/command.js":
/*!*********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/command.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/connection/config.js":
/*!*******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/connection/config.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/connection/index.js":
/*!******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/connection/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../nodejs/files/node_modules/@smithy/types/dist-es/connection/config.js");
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager */ "../nodejs/files/node_modules/@smithy/types/dist-es/connection/manager.js");
/* harmony import */ var _pool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pool */ "../nodejs/files/node_modules/@smithy/types/dist-es/connection/pool.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/connection/manager.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/connection/manager.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/connection/pool.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/connection/pool.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/crypto.js":
/*!********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/crypto.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/encode.js":
/*!********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/encode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoint.js":
/*!**********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/endpoint.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointURLScheme: () => (/* binding */ EndpointURLScheme)
/* harmony export */ });
var EndpointURLScheme;
(function (EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/index.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndpointRuleObject */ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js");
/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorRuleObject */ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js");
/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RuleSetObject */ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/shared.js");
/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TreeRuleObject */ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js");







/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/shared.js":
/*!******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/shared.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/eventStream.js":
/*!*************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/eventStream.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/extensions/checksum.js":
/*!*********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/extensions/checksum.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmId: () => (/* binding */ AlgorithmId),
/* harmony export */   getChecksumConfiguration: () => (/* binding */ getChecksumConfiguration),
/* harmony export */   resolveChecksumRuntimeConfig: () => (/* binding */ resolveChecksumRuntimeConfig)
/* harmony export */ });
var AlgorithmId;
(function (AlgorithmId) {
    AlgorithmId["MD5"] = "md5";
    AlgorithmId["CRC32"] = "crc32";
    AlgorithmId["CRC32C"] = "crc32c";
    AlgorithmId["SHA1"] = "sha1";
    AlgorithmId["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));
const getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    if (runtimeConfig.sha256 !== undefined) {
        checksumAlgorithms.push({
            algorithmId: () => AlgorithmId.SHA256,
            checksumConstructor: () => runtimeConfig.sha256,
        });
    }
    if (runtimeConfig.md5 != undefined) {
        checksumAlgorithms.push({
            algorithmId: () => AlgorithmId.MD5,
            checksumConstructor: () => runtimeConfig.md5,
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return this._checksumAlgorithms;
        },
    };
};
const resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js":
/*!***************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultClientConfiguration: () => (/* binding */ getDefaultClientConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* binding */ resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checksum */ "../nodejs/files/node_modules/@smithy/types/dist-es/extensions/checksum.js");

const getDefaultClientConfiguration = (runtimeConfig) => {
    return {
        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.getChecksumConfiguration)(runtimeConfig),
    };
};
const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.resolveChecksumRuntimeConfig)(config),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js":
/*!******************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/extensions/index.js":
/*!******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/extensions/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmId: () => (/* reexport safe */ _checksum__WEBPACK_IMPORTED_MODULE_2__.AlgorithmId),
/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultClientConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultClientConfiguration */ "../nodejs/files/node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js");
/* harmony import */ var _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultExtensionConfiguration */ "../nodejs/files/node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js");
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checksum */ "../nodejs/files/node_modules/@smithy/types/dist-es/extensions/checksum.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/feature-ids.js":
/*!*************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/feature-ids.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/http.js":
/*!******************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/http.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldPosition: () => (/* binding */ FieldPosition)
/* harmony export */ });
var FieldPosition;
(function (FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js":
/*!********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js":
/*!********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/identity/identity.js":
/*!*******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/identity/identity.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/identity/index.js":
/*!****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/identity/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiKeyIdentity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiKeyIdentity */ "../nodejs/files/node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js");
/* harmony import */ var _awsCredentialIdentity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awsCredentialIdentity */ "../nodejs/files/node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity */ "../nodejs/files/node_modules/@smithy/types/dist-es/identity/identity.js");
/* harmony import */ var _tokenIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenIdentity */ "../nodejs/files/node_modules/@smithy/types/dist-es/identity/tokenIdentity.js");






/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/identity/tokenIdentity.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/identity/tokenIdentity.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmId: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.AlgorithmId),
/* harmony export */   EndpointURLScheme: () => (/* reexport safe */ _endpoint__WEBPACK_IMPORTED_MODULE_9__.EndpointURLScheme),
/* harmony export */   FieldPosition: () => (/* reexport safe */ _http__WEBPACK_IMPORTED_MODULE_14__.FieldPosition),
/* harmony export */   HttpApiKeyAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation),
/* harmony export */   HttpAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.HttpAuthLocation),
/* harmony export */   IniSectionType: () => (/* reexport safe */ _profile__WEBPACK_IMPORTED_MODULE_20__.IniSectionType),
/* harmony export */   RequestHandlerProtocol: () => (/* reexport safe */ _transfer__WEBPACK_IMPORTED_MODULE_30__.RequestHandlerProtocol),
/* harmony export */   SMITHY_CONTEXT_KEY: () => (/* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_18__.SMITHY_CONTEXT_KEY),
/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.getDefaultClientConfiguration),
/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.resolveDefaultRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _abort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abort */ "../nodejs/files/node_modules/@smithy/types/dist-es/abort.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "../nodejs/files/node_modules/@smithy/types/dist-es/auth/index.js");
/* harmony import */ var _blob_blob_payload_input_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blob/blob-payload-input-types */ "../nodejs/files/node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js");
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checksum */ "../nodejs/files/node_modules/@smithy/types/dist-es/checksum.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client */ "../nodejs/files/node_modules/@smithy/types/dist-es/client.js");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./command */ "../nodejs/files/node_modules/@smithy/types/dist-es/command.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connection */ "../nodejs/files/node_modules/@smithy/types/dist-es/connection/index.js");
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crypto */ "../nodejs/files/node_modules/@smithy/types/dist-es/crypto.js");
/* harmony import */ var _encode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./encode */ "../nodejs/files/node_modules/@smithy/types/dist-es/encode.js");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./endpoint */ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoint.js");
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./endpoints */ "../nodejs/files/node_modules/@smithy/types/dist-es/endpoints/index.js");
/* harmony import */ var _eventStream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eventStream */ "../nodejs/files/node_modules/@smithy/types/dist-es/eventStream.js");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extensions */ "../nodejs/files/node_modules/@smithy/types/dist-es/extensions/index.js");
/* harmony import */ var _feature_ids__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feature-ids */ "../nodejs/files/node_modules/@smithy/types/dist-es/feature-ids.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http */ "../nodejs/files/node_modules/@smithy/types/dist-es/http.js");
/* harmony import */ var _http_httpHandlerInitialization__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./http/httpHandlerInitialization */ "../nodejs/files/node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./identity */ "../nodejs/files/node_modules/@smithy/types/dist-es/identity/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logger */ "../nodejs/files/node_modules/@smithy/types/dist-es/logger.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./middleware */ "../nodejs/files/node_modules/@smithy/types/dist-es/middleware.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pagination */ "../nodejs/files/node_modules/@smithy/types/dist-es/pagination.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile */ "../nodejs/files/node_modules/@smithy/types/dist-es/profile.js");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./response */ "../nodejs/files/node_modules/@smithy/types/dist-es/response.js");
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./retry */ "../nodejs/files/node_modules/@smithy/types/dist-es/retry.js");
/* harmony import */ var _serde__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./serde */ "../nodejs/files/node_modules/@smithy/types/dist-es/serde.js");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shapes */ "../nodejs/files/node_modules/@smithy/types/dist-es/shapes.js");
/* harmony import */ var _signature__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./signature */ "../nodejs/files/node_modules/@smithy/types/dist-es/signature.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./stream */ "../nodejs/files/node_modules/@smithy/types/dist-es/stream.js");
/* harmony import */ var _streaming_payload_streaming_blob_common_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./streaming-payload/streaming-blob-common-types */ "../nodejs/files/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js");
/* harmony import */ var _streaming_payload_streaming_blob_payload_input_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./streaming-payload/streaming-blob-payload-input-types */ "../nodejs/files/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js");
/* harmony import */ var _streaming_payload_streaming_blob_payload_output_types__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./streaming-payload/streaming-blob-payload-output-types */ "../nodejs/files/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js");
/* harmony import */ var _transfer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./transfer */ "../nodejs/files/node_modules/@smithy/types/dist-es/transfer.js");
/* harmony import */ var _transform_client_payload_blob_type_narrow__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./transform/client-payload-blob-type-narrow */ "../nodejs/files/node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js");
/* harmony import */ var _transform_no_undefined__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./transform/no-undefined */ "../nodejs/files/node_modules/@smithy/types/dist-es/transform/no-undefined.js");
/* harmony import */ var _transform_type_transform__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./transform/type-transform */ "../nodejs/files/node_modules/@smithy/types/dist-es/transform/type-transform.js");
/* harmony import */ var _uri__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./uri */ "../nodejs/files/node_modules/@smithy/types/dist-es/uri.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./util */ "../nodejs/files/node_modules/@smithy/types/dist-es/util.js");
/* harmony import */ var _waiter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./waiter */ "../nodejs/files/node_modules/@smithy/types/dist-es/waiter.js");







































/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/logger.js":
/*!********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/logger.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/middleware.js":
/*!************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/middleware.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SMITHY_CONTEXT_KEY: () => (/* binding */ SMITHY_CONTEXT_KEY)
/* harmony export */ });
const SMITHY_CONTEXT_KEY = "__smithy_context";


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/pagination.js":
/*!************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/pagination.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/profile.js":
/*!*********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/profile.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IniSectionType: () => (/* binding */ IniSectionType)
/* harmony export */ });
var IniSectionType;
(function (IniSectionType) {
    IniSectionType["PROFILE"] = "profile";
    IniSectionType["SSO_SESSION"] = "sso-session";
    IniSectionType["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/response.js":
/*!**********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/response.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/retry.js":
/*!*******************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/retry.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/serde.js":
/*!*******************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/serde.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/shapes.js":
/*!********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/shapes.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/signature.js":
/*!***********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/signature.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/stream.js":
/*!********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/stream.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js":
/*!***********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js":
/*!******************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js":
/*!*******************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/transfer.js":
/*!**********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/transfer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestHandlerProtocol: () => (/* binding */ RequestHandlerProtocol)
/* harmony export */ });
var RequestHandlerProtocol;
(function (RequestHandlerProtocol) {
    RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js":
/*!*******************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/transform/no-undefined.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/transform/no-undefined.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/transform/type-transform.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/transform/type-transform.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/uri.js":
/*!*****************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/uri.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/util.js":
/*!******************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/util.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/types/dist-es/waiter.js":
/*!********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/types/dist-es/waiter.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/url-parser/dist-es/index.js":
/*!************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/url-parser/dist-es/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseUrl: () => (/* binding */ parseUrl)
/* harmony export */ });
/* harmony import */ var _smithy_querystring_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/querystring-parser */ "../nodejs/files/node_modules/@smithy/querystring-parser/dist-es/index.js");

const parseUrl = (url) => {
    if (typeof url === "string") {
        return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = (0,_smithy_querystring_parser__WEBPACK_IMPORTED_MODULE_0__.parseQueryString)(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/constants.browser.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-base64/dist-es/constants.browser.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alphabetByEncoding: () => (/* binding */ alphabetByEncoding),
/* harmony export */   alphabetByValue: () => (/* binding */ alphabetByValue),
/* harmony export */   bitsPerByte: () => (/* binding */ bitsPerByte),
/* harmony export */   bitsPerLetter: () => (/* binding */ bitsPerLetter),
/* harmony export */   maxLetterValue: () => (/* binding */ maxLetterValue)
/* harmony export */ });
const alphabetByEncoding = {};
const alphabetByValue = new Array(64);
for (let i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
    const char = String.fromCharCode(i + start);
    alphabetByEncoding[char] = i;
    alphabetByValue[i] = char;
}
for (let i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
    const char = String.fromCharCode(i + start);
    const index = i + 26;
    alphabetByEncoding[char] = index;
    alphabetByValue[index] = char;
}
for (let i = 0; i < 10; i++) {
    alphabetByEncoding[i.toString(10)] = i + 52;
    const char = i.toString(10);
    const index = i + 52;
    alphabetByEncoding[char] = index;
    alphabetByValue[index] = char;
}
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";
const bitsPerLetter = 6;
const bitsPerByte = 8;
const maxLetterValue = 0b111111;



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromBase64: () => (/* binding */ fromBase64)
/* harmony export */ });
/* harmony import */ var _constants_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.browser */ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/constants.browser.js");

const fromBase64 = (input) => {
    let totalByteLength = (input.length / 4) * 3;
    if (input.slice(-2) === "==") {
        totalByteLength -= 2;
    }
    else if (input.slice(-1) === "=") {
        totalByteLength--;
    }
    const out = new ArrayBuffer(totalByteLength);
    const dataView = new DataView(out);
    for (let i = 0; i < input.length; i += 4) {
        let bits = 0;
        let bitLength = 0;
        for (let j = i, limit = i + 3; j <= limit; j++) {
            if (input[j] !== "=") {
                if (!(input[j] in _constants_browser__WEBPACK_IMPORTED_MODULE_0__.alphabetByEncoding)) {
                    throw new TypeError(`Invalid character ${input[j]} in base64 string.`);
                }
                bits |= _constants_browser__WEBPACK_IMPORTED_MODULE_0__.alphabetByEncoding[input[j]] << ((limit - j) * _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter);
                bitLength += _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter;
            }
            else {
                bits >>= _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter;
            }
        }
        const chunkOffset = (i / 4) * 3;
        bits >>= bitLength % _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte;
        const byteLength = Math.floor(bitLength / _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte);
        for (let k = 0; k < byteLength; k++) {
            const offset = (byteLength - k - 1) * _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte;
            dataView.setUint8(chunkOffset + k, (bits & (255 << offset)) >> offset);
        }
    }
    return new Uint8Array(out);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/index.js":
/*!*************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-base64/dist-es/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromBase64: () => (/* reexport safe */ _fromBase64__WEBPACK_IMPORTED_MODULE_0__.fromBase64),
/* harmony export */   toBase64: () => (/* reexport safe */ _toBase64__WEBPACK_IMPORTED_MODULE_1__.toBase64)
/* harmony export */ });
/* harmony import */ var _fromBase64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromBase64 */ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js");
/* harmony import */ var _toBase64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toBase64 */ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/toBase64.browser.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/toBase64.browser.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-base64/dist-es/toBase64.browser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toBase64: () => (/* binding */ toBase64)
/* harmony export */ });
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-utf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/index.js");
/* harmony import */ var _constants_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.browser */ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/constants.browser.js");


function toBase64(_input) {
    let input;
    if (typeof _input === "string") {
        input = (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(_input);
    }
    else {
        input = _input;
    }
    const isArrayLike = typeof input === "object" && typeof input.length === "number";
    const isUint8Array = typeof input === "object" &&
        typeof input.byteOffset === "number" &&
        typeof input.byteLength === "number";
    if (!isArrayLike && !isUint8Array) {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    let str = "";
    for (let i = 0; i < input.length; i += 3) {
        let bits = 0;
        let bitLength = 0;
        for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
            bits |= input[j] << ((limit - j - 1) * _constants_browser__WEBPACK_IMPORTED_MODULE_1__.bitsPerByte);
            bitLength += _constants_browser__WEBPACK_IMPORTED_MODULE_1__.bitsPerByte;
        }
        const bitClusterCount = Math.ceil(bitLength / _constants_browser__WEBPACK_IMPORTED_MODULE_1__.bitsPerLetter);
        bits <<= bitClusterCount * _constants_browser__WEBPACK_IMPORTED_MODULE_1__.bitsPerLetter - bitLength;
        for (let k = 1; k <= bitClusterCount; k++) {
            const offset = (bitClusterCount - k) * _constants_browser__WEBPACK_IMPORTED_MODULE_1__.bitsPerLetter;
            str += _constants_browser__WEBPACK_IMPORTED_MODULE_1__.alphabetByValue[(bits & (_constants_browser__WEBPACK_IMPORTED_MODULE_1__.maxLetterValue << offset)) >> offset];
        }
        str += "==".slice(0, 4 - bitClusterCount);
    }
    return str;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js":
/*!****************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateBodyLength: () => (/* binding */ calculateBodyLength)
/* harmony export */ });
const TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
const calculateBodyLength = (body) => {
    if (typeof body === "string") {
        if (TEXT_ENCODER) {
            return TEXT_ENCODER.encode(body).byteLength;
        }
        let len = body.length;
        for (let i = len - 1; i >= 0; i--) {
            const code = body.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff)
                len++;
            else if (code > 0x7ff && code <= 0xffff)
                len += 2;
            if (code >= 0xdc00 && code <= 0xdfff)
                i--;
        }
        return len;
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-body-length-browser/dist-es/index.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-body-length-browser/dist-es/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateBodyLength: () => (/* reexport safe */ _calculateBodyLength__WEBPACK_IMPORTED_MODULE_0__.calculateBodyLength)
/* harmony export */ });
/* harmony import */ var _calculateBodyLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateBodyLength */ "../nodejs/files/node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js":
/*!********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   booleanSelector: () => (/* binding */ booleanSelector)
/* harmony export */ });
const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/index.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.SelectorType),
/* harmony export */   booleanSelector: () => (/* reexport safe */ _booleanSelector__WEBPACK_IMPORTED_MODULE_0__.booleanSelector),
/* harmony export */   numberSelector: () => (/* reexport safe */ _numberSelector__WEBPACK_IMPORTED_MODULE_1__.numberSelector)
/* harmony export */ });
/* harmony import */ var _booleanSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booleanSelector */ "../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js");
/* harmony import */ var _numberSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberSelector */ "../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/numberSelector.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/types.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/numberSelector.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/numberSelector.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numberSelector: () => (/* binding */ numberSelector)
/* harmony export */ });
const numberSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    const numberValue = parseInt(obj[key], 10);
    if (Number.isNaN(numberValue)) {
        throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
    }
    return numberValue;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/types.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-config-provider/dist-es/types.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorType: () => (/* binding */ SelectorType)
/* harmony export */ });
var SelectorType;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js":
/*!********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULTS_MODE_OPTIONS: () => (/* binding */ DEFAULTS_MODE_OPTIONS)
/* harmony export */ });
const DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveDefaultsModeConfig: () => (/* reexport safe */ _resolveDefaultsModeConfig__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultsModeConfig)
/* harmony export */ });
/* harmony import */ var _resolveDefaultsModeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolveDefaultsModeConfig */ "../nodejs/files/node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js");



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js":
/*!************************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveDefaultsModeConfig: () => (/* binding */ resolveDefaultsModeConfig)
/* harmony export */ });
/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ "../nodejs/files/node_modules/@smithy/property-provider/dist-es/index.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bowser */ "../nodejs/files/node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js");



const resolveDefaultsModeConfig = ({ defaultsMode, } = {}) => (0,_smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.memoize)(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
        case "auto":
            return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
        case "mobile":
        case "in-region":
        case "cross-region":
        case "standard":
        case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
const isMobileBrowser = () => {
    const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent
        ? bowser__WEBPACK_IMPORTED_MODULE_1___default().parse(window.navigator.userAgent)
        : undefined;
    const platform = parsedUA?.platform?.type;
    return platform === "tablet" || platform === "mobile";
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointCache: () => (/* binding */ EndpointCache)
/* harmony export */ });
class EndpointCache {
    constructor({ size, params }) {
        this.data = new Map();
        this.parameters = [];
        this.capacity = size ?? 50;
        if (params) {
            this.parameters = params;
        }
    }
    get(endpointParams, resolver) {
        const key = this.hash(endpointParams);
        if (key === false) {
            return resolver();
        }
        if (!this.data.has(key)) {
            if (this.data.size > this.capacity + 10) {
                const keys = this.data.keys();
                let i = 0;
                while (true) {
                    const { value, done } = keys.next();
                    this.data.delete(value);
                    if (done || ++i > 10) {
                        break;
                    }
                }
            }
            this.data.set(key, resolver());
        }
        return this.data.get(key);
    }
    size() {
        return this.data.size;
    }
    hash(endpointParams) {
        let buffer = "";
        const { parameters } = this;
        if (parameters.length === 0) {
            return false;
        }
        for (const param of parameters) {
            const val = String(endpointParams[param] ?? "");
            if (val.includes("|;")) {
                return false;
            }
            buffer += val + "|;";
        }
        return buffer;
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debugId: () => (/* binding */ debugId)
/* harmony export */ });
const debugId = "endpoints";


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/index.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debugId: () => (/* reexport safe */ _debugId__WEBPACK_IMPORTED_MODULE_0__.debugId),
/* harmony export */   toDebugString: () => (/* reexport safe */ _toDebugString__WEBPACK_IMPORTED_MODULE_1__.toDebugString)
/* harmony export */ });
/* harmony import */ var _debugId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debugId */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js");
/* harmony import */ var _toDebugString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDebugString */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toDebugString: () => (/* binding */ toDebugString)
/* harmony export */ });
function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
        return input;
    }
    if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/index.js":
/*!****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointCache: () => (/* reexport safe */ _cache_EndpointCache__WEBPACK_IMPORTED_MODULE_0__.EndpointCache),
/* harmony export */   EndpointError: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.EndpointError),
/* harmony export */   customEndpointFunctions: () => (/* reexport safe */ _utils_customEndpointFunctions__WEBPACK_IMPORTED_MODULE_3__.customEndpointFunctions),
/* harmony export */   isIpAddress: () => (/* reexport safe */ _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_1__.isIpAddress),
/* harmony export */   isValidHostLabel: () => (/* reexport safe */ _lib_isValidHostLabel__WEBPACK_IMPORTED_MODULE_2__.isValidHostLabel),
/* harmony export */   resolveEndpoint: () => (/* reexport safe */ _resolveEndpoint__WEBPACK_IMPORTED_MODULE_4__.resolveEndpoint)
/* harmony export */ });
/* harmony import */ var _cache_EndpointCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache/EndpointCache */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js");
/* harmony import */ var _lib_isIpAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/isIpAddress */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js");
/* harmony import */ var _lib_isValidHostLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/isValidHostLabel */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js");
/* harmony import */ var _utils_customEndpointFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/customEndpointFunctions */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js");
/* harmony import */ var _resolveEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolveEndpoint */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");








/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   booleanEquals: () => (/* binding */ booleanEquals)
/* harmony export */ });
const booleanEquals = (value1, value2) => value1 === value2;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAttr: () => (/* binding */ getAttr)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _getAttrPathList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAttrPathList */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js");


const getAttr = (value, path) => (0,_getAttrPathList__WEBPACK_IMPORTED_MODULE_1__.getAttrPathList)(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
        throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    }
    else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
    }
    return acc[index];
}, value);


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAttrPathList: () => (/* binding */ getAttrPathList)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");

const getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
                pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
        }
        else {
            pathList.push(part);
        }
    }
    return pathList;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/index.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   booleanEquals: () => (/* reexport safe */ _booleanEquals__WEBPACK_IMPORTED_MODULE_0__.booleanEquals),
/* harmony export */   getAttr: () => (/* reexport safe */ _getAttr__WEBPACK_IMPORTED_MODULE_1__.getAttr),
/* harmony export */   isSet: () => (/* reexport safe */ _isSet__WEBPACK_IMPORTED_MODULE_2__.isSet),
/* harmony export */   isValidHostLabel: () => (/* reexport safe */ _isValidHostLabel__WEBPACK_IMPORTED_MODULE_3__.isValidHostLabel),
/* harmony export */   not: () => (/* reexport safe */ _not__WEBPACK_IMPORTED_MODULE_4__.not),
/* harmony export */   parseURL: () => (/* reexport safe */ _parseURL__WEBPACK_IMPORTED_MODULE_5__.parseURL),
/* harmony export */   stringEquals: () => (/* reexport safe */ _stringEquals__WEBPACK_IMPORTED_MODULE_6__.stringEquals),
/* harmony export */   substring: () => (/* reexport safe */ _substring__WEBPACK_IMPORTED_MODULE_7__.substring),
/* harmony export */   uriEncode: () => (/* reexport safe */ _uriEncode__WEBPACK_IMPORTED_MODULE_8__.uriEncode)
/* harmony export */ });
/* harmony import */ var _booleanEquals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booleanEquals */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js");
/* harmony import */ var _getAttr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAttr */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js");
/* harmony import */ var _isSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isSet */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js");
/* harmony import */ var _isValidHostLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValidHostLabel */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/not.js");
/* harmony import */ var _parseURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parseURL */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js");
/* harmony import */ var _stringEquals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stringEquals */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js");
/* harmony import */ var _substring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./substring */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/substring.js");
/* harmony import */ var _uriEncode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uriEncode */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js");











/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIpAddress: () => (/* binding */ isIpAddress)
/* harmony export */ });
const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
const isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]"));


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSet: () => (/* binding */ isSet)
/* harmony export */ });
const isSet = (value) => value != null;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidHostLabel: () => (/* binding */ isValidHostLabel)
/* harmony export */ });
const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
        if (!isValidHostLabel(label)) {
            return false;
        }
    }
    return true;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/not.js":
/*!******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/not.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   not: () => (/* binding */ not)
/* harmony export */ });
const not = (value) => !value;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js":
/*!***********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseURL: () => (/* binding */ parseURL)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ "../nodejs/files/node_modules/@smithy/types/dist-es/index.js");
/* harmony import */ var _isIpAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isIpAddress */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js");


const DEFAULT_PORTS = {
    [_smithy_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme.HTTP]: 80,
    [_smithy_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme.HTTPS]: 443,
};
const parseURL = (value) => {
    const whatwgURL = (() => {
        try {
            if (value instanceof URL) {
                return value;
            }
            if (typeof value === "object" && "hostname" in value) {
                const { hostname, port, protocol = "", path = "", query = {} } = value;
                const url = new URL(`${protocol}//${hostname}${port ? `:${port}` : ""}${path}`);
                url.search = Object.entries(query)
                    .map(([k, v]) => `${k}=${v}`)
                    .join("&");
                return url;
            }
            return new URL(value);
        }
        catch (error) {
            return null;
        }
    })();
    if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
        return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(_smithy_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme).includes(scheme)) {
        return null;
    }
    const isIp = (0,_isIpAddress__WEBPACK_IMPORTED_MODULE_1__.isIpAddress)(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ||
        (typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`));
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp,
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stringEquals: () => (/* binding */ stringEquals)
/* harmony export */ });
const stringEquals = (value1, value2) => value1 === value2;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/substring.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/substring.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   substring: () => (/* binding */ substring)
/* harmony export */ });
const substring = (input, start, stop, reverse) => {
    if (start >= stop || input.length < stop) {
        return null;
    }
    if (!reverse) {
        return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uriEncode: () => (/* binding */ uriEncode)
/* harmony export */ });
const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveEndpoint: () => (/* binding */ resolveEndpoint)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/index.js");



const resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} Initial EndpointParams: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpointParams)}`);
    const paramsWithDefault = Object.entries(parameters)
        .filter(([, v]) => v.default != null)
        .map(([k, v]) => [k, v.default]);
    if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
    }
    const requiredParams = Object.entries(parameters)
        .filter(([, v]) => v.required)
        .map(([k]) => k);
    for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
            throw new _types__WEBPACK_IMPORTED_MODULE_1__.EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
    }
    const endpoint = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.evaluateRules)(rules, { endpointParams, logger, referenceRecord: {} });
    options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} Resolved endpoint: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpoint)}`);
    return endpoint;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* binding */ EndpointError)
/* harmony export */ });
class EndpointError extends Error {
    constructor(message) {
        super(message);
        this.name = "EndpointError";
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js":
/*!***********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js":
/*!********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointError: () => (/* reexport safe */ _EndpointError__WEBPACK_IMPORTED_MODULE_0__.EndpointError)
/* harmony export */ });
/* harmony import */ var _EndpointError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndpointError */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js");
/* harmony import */ var _EndpointFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EndpointFunctions */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js");
/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointRuleObject */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js");
/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorRuleObject */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js");
/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RuleSetObject */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js");
/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TreeRuleObject */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/shared.js");









/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/shared.js":
/*!***********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/shared.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callFunction: () => (/* binding */ callFunction)
/* harmony export */ });
/* harmony import */ var _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customEndpointFunctions */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js");
/* harmony import */ var _endpointFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpointFunctions */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js");
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateExpression */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js");



const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_2__.evaluateExpression)(arg, "arg", options));
    const fnSegments = fn.split(".");
    if (fnSegments[0] in _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions && fnSegments[1] != null) {
        return _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
    }
    return _endpointFunctions__WEBPACK_IMPORTED_MODULE_1__.endpointFunctions[fn](...evaluatedArgs);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js":
/*!****************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customEndpointFunctions: () => (/* binding */ customEndpointFunctions)
/* harmony export */ });
const customEndpointFunctions = {};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endpointFunctions: () => (/* binding */ endpointFunctions)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/index.js");

const endpointFunctions = {
    booleanEquals: _lib__WEBPACK_IMPORTED_MODULE_0__.booleanEquals,
    getAttr: _lib__WEBPACK_IMPORTED_MODULE_0__.getAttr,
    isSet: _lib__WEBPACK_IMPORTED_MODULE_0__.isSet,
    isValidHostLabel: _lib__WEBPACK_IMPORTED_MODULE_0__.isValidHostLabel,
    not: _lib__WEBPACK_IMPORTED_MODULE_0__.not,
    parseURL: _lib__WEBPACK_IMPORTED_MODULE_0__.parseURL,
    stringEquals: _lib__WEBPACK_IMPORTED_MODULE_0__.stringEquals,
    substring: _lib__WEBPACK_IMPORTED_MODULE_0__.substring,
    uriEncode: _lib__WEBPACK_IMPORTED_MODULE_0__.uriEncode,
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateCondition: () => (/* binding */ evaluateCondition)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _callFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callFunction */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js");



const evaluateCondition = ({ assign, ...fnArgs }, options) => {
    if (assign && assign in options.referenceRecord) {
        throw new _types__WEBPACK_IMPORTED_MODULE_1__.EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = (0,_callFunction__WEBPACK_IMPORTED_MODULE_2__.callFunction)(fnArgs, options);
    options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} evaluateCondition: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(fnArgs)} = ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(value)}`);
    return {
        result: value === "" ? true : !!value,
        ...(assign != null && { toAssign: { name: assign, value } }),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js":
/*!***********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateConditions: () => (/* binding */ evaluateConditions)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/index.js");
/* harmony import */ var _evaluateCondition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateCondition */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js");


const evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    for (const condition of conditions) {
        const { result, toAssign } = (0,_evaluateCondition__WEBPACK_IMPORTED_MODULE_1__.evaluateCondition)(condition, {
            ...options,
            referenceRecord: {
                ...options.referenceRecord,
                ...conditionsReferenceRecord,
            },
        });
        if (!result) {
            return { result };
        }
        if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} assign: ${toAssign.name} := ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(toAssign.value)}`);
        }
    }
    return { result: true, referenceRecord: conditionsReferenceRecord };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js":
/*!*************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateEndpointRule: () => (/* binding */ evaluateEndpointRule)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/debug/index.js");
/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateConditions */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js");
/* harmony import */ var _getEndpointHeaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointHeaders */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js");
/* harmony import */ var _getEndpointProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getEndpointProperties */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js");
/* harmony import */ var _getEndpointUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getEndpointUrl */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js");





const evaluateEndpointRule = (endpointRule, options) => {
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_1__.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    };
    const { url, properties, headers } = endpoint;
    options.logger?.debug?.(`${_debug__WEBPACK_IMPORTED_MODULE_0__.debugId} Resolving endpoint from template: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpoint)}`);
    return {
        ...(headers != undefined && {
            headers: (0,_getEndpointHeaders__WEBPACK_IMPORTED_MODULE_2__.getEndpointHeaders)(headers, endpointRuleOptions),
        }),
        ...(properties != undefined && {
            properties: (0,_getEndpointProperties__WEBPACK_IMPORTED_MODULE_3__.getEndpointProperties)(properties, endpointRuleOptions),
        }),
        url: (0,_getEndpointUrl__WEBPACK_IMPORTED_MODULE_4__.getEndpointUrl)(url, endpointRuleOptions),
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateErrorRule: () => (/* binding */ evaluateErrorRule)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateConditions */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js");
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateExpression */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js");



const evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_1__.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError((0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_2__.evaluateExpression)(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    }));
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js":
/*!***********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateExpression: () => (/* binding */ evaluateExpression)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _callFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callFunction */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js");
/* harmony import */ var _evaluateTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateTemplate */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js");
/* harmony import */ var _getReferenceValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getReferenceValue */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js");




const evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
        return (0,_evaluateTemplate__WEBPACK_IMPORTED_MODULE_2__.evaluateTemplate)(obj, options);
    }
    else if (obj["fn"]) {
        return (0,_callFunction__WEBPACK_IMPORTED_MODULE_1__.callFunction)(obj, options);
    }
    else if (obj["ref"]) {
        return (0,_getReferenceValue__WEBPACK_IMPORTED_MODULE_3__.getReferenceValue)(obj, options);
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateRules: () => (/* binding */ evaluateRules)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _evaluateEndpointRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateEndpointRule */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js");
/* harmony import */ var _evaluateErrorRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateErrorRule */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js");
/* harmony import */ var _evaluateTreeRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evaluateTreeRule */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js");




const evaluateRules = (rules, options) => {
    for (const rule of rules) {
        if (rule.type === "endpoint") {
            const endpointOrUndefined = (0,_evaluateEndpointRule__WEBPACK_IMPORTED_MODULE_1__.evaluateEndpointRule)(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else if (rule.type === "error") {
            (0,_evaluateErrorRule__WEBPACK_IMPORTED_MODULE_2__.evaluateErrorRule)(rule, options);
        }
        else if (rule.type === "tree") {
            const endpointOrUndefined = (0,_evaluateTreeRule__WEBPACK_IMPORTED_MODULE_3__.evaluateTreeRule)(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else {
            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unknown endpoint rule: ${rule}`);
        }
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Rules evaluation failed`);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateTemplate: () => (/* binding */ evaluateTemplate)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/lib/index.js");

const evaluateTemplate = (template, options) => {
    const evaluatedTemplateArr = [];
    const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    let currentIndex = 0;
    while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push((0,_lib__WEBPACK_IMPORTED_MODULE_0__.getAttr)(templateContext[refName], attrName));
        }
        else {
            evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js":
/*!*********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateTreeRule: () => (/* binding */ evaluateTreeRule)
/* harmony export */ });
/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluateConditions */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js");
/* harmony import */ var _evaluateRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateRules */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js");


const evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_0__.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    return (0,_evaluateRules__WEBPACK_IMPORTED_MODULE_1__.evaluateRules)(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    });
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js":
/*!***********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointHeaders: () => (/* binding */ getEndpointHeaders)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateExpression */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js");


const getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
    ...acc,
    [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_1__.evaluateExpression)(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
    }),
}), {});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js":
/*!**************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointProperties: () => (/* binding */ getEndpointProperties)
/* harmony export */ });
/* harmony import */ var _getEndpointProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEndpointProperty */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js");

const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
    ...acc,
    [propertyKey]: (0,_getEndpointProperty__WEBPACK_IMPORTED_MODULE_0__.getEndpointProperty)(propertyVal, options),
}), {});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js":
/*!************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointProperty: () => (/* binding */ getEndpointProperty)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _evaluateTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateTemplate */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js");
/* harmony import */ var _getEndpointProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointProperties */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js");



const getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
        case "string":
            return (0,_evaluateTemplate__WEBPACK_IMPORTED_MODULE_1__.evaluateTemplate)(property, options);
        case "object":
            if (property === null) {
                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return (0,_getEndpointProperties__WEBPACK_IMPORTED_MODULE_2__.getEndpointProperties)(property, options);
        case "boolean":
            return property;
        default:
            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEndpointUrl: () => (/* binding */ getEndpointUrl)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateExpression */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js");


const getEndpointUrl = (endpointUrl, options) => {
    const expression = (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_1__.evaluateExpression)(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
        try {
            return new URL(expression);
        }
        catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
        }
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getReferenceValue: () => (/* binding */ getReferenceValue)
/* harmony export */ });
const getReferenceValue = ({ ref }, options) => {
    const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    return referenceRecord[ref];
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/index.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customEndpointFunctions: () => (/* reexport safe */ _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__.customEndpointFunctions),
/* harmony export */   evaluateRules: () => (/* reexport safe */ _evaluateRules__WEBPACK_IMPORTED_MODULE_1__.evaluateRules)
/* harmony export */ });
/* harmony import */ var _customEndpointFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customEndpointFunctions */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js");
/* harmony import */ var _evaluateRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateRules */ "../nodejs/files/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-hex-encoding/dist-es/index.js":
/*!*******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-hex-encoding/dist-es/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromHex: () => (/* binding */ fromHex),
/* harmony export */   toHex: () => (/* binding */ toHex)
/* harmony export */ });
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSmithyContext: () => (/* binding */ getSmithyContext)
/* harmony export */ });
/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ "../nodejs/files/node_modules/@smithy/types/dist-es/index.js");

const getSmithyContext = (context) => context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] || (context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] = {});


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-middleware/dist-es/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSmithyContext: () => (/* reexport safe */ _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext),
/* harmony export */   normalizeProvider: () => (/* reexport safe */ _normalizeProvider__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)
/* harmony export */ });
/* harmony import */ var _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSmithyContext */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js");
/* harmony import */ var _normalizeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeProvider */ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js":
/*!*****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeProvider: () => (/* binding */ normalizeProvider)
/* harmony export */ });
const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdaptiveRetryStrategy: () => (/* binding */ AdaptiveRetryStrategy)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/config.js");
/* harmony import */ var _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultRateLimiter */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js");
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandardRetryStrategy */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js");



class AdaptiveRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = _config__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_1__.DefaultRateLimiter();
        this.standardRetryStrategy = new _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_2__.StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    }
    recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js":
/*!******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfiguredRetryStrategy: () => (/* binding */ ConfiguredRetryStrategy)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/constants.js");
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandardRetryStrategy */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js");


class ConfiguredRetryStrategy extends _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy {
    constructor(maxAttempts, computeNextBackoffDelay = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
            this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        }
        else {
            this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultRateLimiter: () => (/* binding */ DefaultRateLimiter)
/* harmony export */ });
/* harmony import */ var _smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/service-error-classification */ "../nodejs/files/node_modules/@smithy/service-error-classification/dist-es/index.js");

class DefaultRateLimiter {
    constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if ((0,_smithy_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isThrottlingError)(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js":
/*!****************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandardRetryStrategy: () => (/* binding */ StandardRetryStrategy)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/constants.js");
/* harmony import */ var _defaultRetryBackoffStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultRetryBackoffStrategy */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js");
/* harmony import */ var _defaultRetryToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultRetryToken */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js");




class StandardRetryStrategy {
    constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = _config__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.STANDARD;
        this.capacity = _constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = (0,_defaultRetryBackoffStrategy__WEBPACK_IMPORTED_MODULE_2__.getDefaultRetryBackoffStrategy)();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
    }
    async acquireInitialRetryToken(retryTokenScope) {
        return (0,_defaultRetryToken__WEBPACK_IMPORTED_MODULE_3__.createDefaultRetryToken)({
            retryDelay: _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_DELAY_BASE,
            retryCount: 0,
        });
    }
    async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
            const errorType = errorInfo.errorType;
            this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? _constants__WEBPACK_IMPORTED_MODULE_1__.THROTTLING_RETRY_DELAY_BASE : _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_DELAY_BASE);
            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
            const retryDelay = errorInfo.retryAfterHint
                ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType)
                : delayFromErrorType;
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return (0,_defaultRetryToken__WEBPACK_IMPORTED_MODULE_3__.createDefaultRetryToken)({
                retryDelay,
                retryCount: token.getRetryCount() + 1,
                retryCost: capacityCost,
            });
        }
        throw new Error("No retry token available");
    }
    recordSuccess(token) {
        this.capacity = Math.max(_constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? _constants__WEBPACK_IMPORTED_MODULE_1__.NO_RETRY_INCREMENT));
    }
    getCapacity() {
        return this.capacity;
    }
    async getMaxAttempts() {
        try {
            return await this.maxAttemptsProvider();
        }
        catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${_config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MAX_ATTEMPTS}`);
            return _config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MAX_ATTEMPTS;
        }
    }
    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return (attempts < maxAttempts &&
            this.capacity >= this.getCapacityCost(errorInfo.errorType) &&
            this.isRetryableError(errorInfo.errorType));
    }
    getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? _constants__WEBPACK_IMPORTED_MODULE_1__.TIMEOUT_RETRY_COST : _constants__WEBPACK_IMPORTED_MODULE_1__.RETRY_COST;
    }
    isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/config.js":
/*!*************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-retry/dist-es/config.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MAX_ATTEMPTS: () => (/* binding */ DEFAULT_MAX_ATTEMPTS),
/* harmony export */   DEFAULT_RETRY_MODE: () => (/* binding */ DEFAULT_RETRY_MODE),
/* harmony export */   RETRY_MODES: () => (/* binding */ RETRY_MODES)
/* harmony export */ });
var RETRY_MODES;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
const DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/constants.js":
/*!****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-retry/dist-es/constants.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_RETRY_DELAY_BASE: () => (/* binding */ DEFAULT_RETRY_DELAY_BASE),
/* harmony export */   INITIAL_RETRY_TOKENS: () => (/* binding */ INITIAL_RETRY_TOKENS),
/* harmony export */   INVOCATION_ID_HEADER: () => (/* binding */ INVOCATION_ID_HEADER),
/* harmony export */   MAXIMUM_RETRY_DELAY: () => (/* binding */ MAXIMUM_RETRY_DELAY),
/* harmony export */   NO_RETRY_INCREMENT: () => (/* binding */ NO_RETRY_INCREMENT),
/* harmony export */   REQUEST_HEADER: () => (/* binding */ REQUEST_HEADER),
/* harmony export */   RETRY_COST: () => (/* binding */ RETRY_COST),
/* harmony export */   THROTTLING_RETRY_DELAY_BASE: () => (/* binding */ THROTTLING_RETRY_DELAY_BASE),
/* harmony export */   TIMEOUT_RETRY_COST: () => (/* binding */ TIMEOUT_RETRY_COST)
/* harmony export */ });
const DEFAULT_RETRY_DELAY_BASE = 100;
const MAXIMUM_RETRY_DELAY = 20 * 1000;
const THROTTLING_RETRY_DELAY_BASE = 500;
const INITIAL_RETRY_TOKENS = 500;
const RETRY_COST = 5;
const TIMEOUT_RETRY_COST = 10;
const NO_RETRY_INCREMENT = 1;
const INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
const REQUEST_HEADER = "amz-sdk-request";


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultRetryBackoffStrategy: () => (/* binding */ getDefaultRetryBackoffStrategy)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/constants.js");

const getDefaultRetryBackoffStrategy = () => {
    let delayBase = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RETRY_DELAY_BASE;
    const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(_constants__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    };
    const setDelayBase = (delay) => {
        delayBase = delay;
    };
    return {
        computeNextBackoffDelay,
        setDelayBase,
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js":
/*!************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDefaultRetryToken: () => (/* binding */ createDefaultRetryToken)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/constants.js");

const createDefaultRetryToken = ({ retryDelay, retryCount, retryCost, }) => {
    const getRetryCount = () => retryCount;
    const getRetryDelay = () => Math.min(_constants__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, retryDelay);
    const getRetryCost = () => retryCost;
    return {
        getRetryCount,
        getRetryDelay,
        getRetryCost,
    };
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/index.js":
/*!************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-retry/dist-es/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdaptiveRetryStrategy: () => (/* reexport safe */ _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__.AdaptiveRetryStrategy),
/* harmony export */   ConfiguredRetryStrategy: () => (/* reexport safe */ _ConfiguredRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.ConfiguredRetryStrategy),
/* harmony export */   DEFAULT_MAX_ATTEMPTS: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_MAX_ATTEMPTS),
/* harmony export */   DEFAULT_RETRY_DELAY_BASE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_RETRY_DELAY_BASE),
/* harmony export */   DEFAULT_RETRY_MODE: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_RETRY_MODE),
/* harmony export */   DefaultRateLimiter: () => (/* reexport safe */ _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_2__.DefaultRateLimiter),
/* harmony export */   INITIAL_RETRY_TOKENS: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.INITIAL_RETRY_TOKENS),
/* harmony export */   INVOCATION_ID_HEADER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.INVOCATION_ID_HEADER),
/* harmony export */   MAXIMUM_RETRY_DELAY: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.MAXIMUM_RETRY_DELAY),
/* harmony export */   NO_RETRY_INCREMENT: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.NO_RETRY_INCREMENT),
/* harmony export */   REQUEST_HEADER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.REQUEST_HEADER),
/* harmony export */   RETRY_COST: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.RETRY_COST),
/* harmony export */   RETRY_MODES: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_4__.RETRY_MODES),
/* harmony export */   StandardRetryStrategy: () => (/* reexport safe */ _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_3__.StandardRetryStrategy),
/* harmony export */   THROTTLING_RETRY_DELAY_BASE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.THROTTLING_RETRY_DELAY_BASE),
/* harmony export */   TIMEOUT_RETRY_COST: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.TIMEOUT_RETRY_COST)
/* harmony export */ });
/* harmony import */ var _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdaptiveRetryStrategy */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js");
/* harmony import */ var _ConfiguredRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfiguredRetryStrategy */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js");
/* harmony import */ var _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultRateLimiter */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js");
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StandardRetryStrategy */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/types.js");









/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-retry/dist-es/types.js":
/*!************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-retry/dist-es/types.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js":
/*!**********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Uint8ArrayBlobAdapter: () => (/* binding */ Uint8ArrayBlobAdapter)
/* harmony export */ });
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transforms */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/blob/transforms.js");

class Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
            case "string":
                return (0,_transforms__WEBPACK_IMPORTED_MODULE_0__.transformFromString)(source, encoding);
            default:
                throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
    }
    static mutate(source) {
        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
        return source;
    }
    transformToString(encoding = "utf-8") {
        return (0,_transforms__WEBPACK_IMPORTED_MODULE_0__.transformToString)(this, encoding);
    }
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/blob/transforms.js":
/*!***********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-stream/dist-es/blob/transforms.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformFromString: () => (/* binding */ transformFromString),
/* harmony export */   transformToString: () => (/* binding */ transformToString)
/* harmony export */ });
/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-base64 */ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/index.js");
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-utf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/index.js");
/* harmony import */ var _Uint8ArrayBlobAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Uint8ArrayBlobAdapter */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js");



function transformToString(payload, encoding = "utf-8") {
    if (encoding === "base64") {
        return (0,_smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__.toBase64)(payload);
    }
    return (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.toUtf8)(payload);
}
function transformFromString(str, encoding) {
    if (encoding === "base64") {
        return _Uint8ArrayBlobAdapter__WEBPACK_IMPORTED_MODULE_2__.Uint8ArrayBlobAdapter.mutate((0,_smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__.fromBase64)(str));
    }
    return _Uint8ArrayBlobAdapter__WEBPACK_IMPORTED_MODULE_2__.Uint8ArrayBlobAdapter.mutate((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(str));
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js":
/*!***************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChecksumStream: () => (/* binding */ ChecksumStream)
/* harmony export */ });
const ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function () { };
class ChecksumStream extends ReadableStreamRef {
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js":
/*!*********************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createChecksumStream: () => (/* binding */ createChecksumStream)
/* harmony export */ });
/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-base64 */ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/index.js");
/* harmony import */ var _stream_type_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stream-type-check */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/stream-type-check.js");
/* harmony import */ var _ChecksumStream_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChecksumStream.browser */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js");



const createChecksumStream = ({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder, }) => {
    if (!(0,_stream_type_check__WEBPACK_IMPORTED_MODULE_1__.isReadableStream)(source)) {
        throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
    }
    const encoder = base64Encoder ?? _smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__.toBase64;
    if (typeof TransformStream !== "function") {
        throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
    }
    const transform = new TransformStream({
        start() { },
        async transform(chunk, controller) {
            checksum.update(chunk);
            controller.enqueue(chunk);
        },
        async flush(controller) {
            const digest = await checksum.digest();
            const received = encoder(digest);
            if (expectedChecksum !== received) {
                const error = new Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${received}"` +
                    ` in response header "${checksumSourceLocation}".`);
                controller.error(error);
            }
            else {
                controller.terminate();
            }
        },
    });
    source.pipeThrough(transform);
    const readable = transform.readable;
    Object.setPrototypeOf(readable, _ChecksumStream_browser__WEBPACK_IMPORTED_MODULE_2__.ChecksumStream.prototype);
    return readable;
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js":
/*!*******************************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAwsChunkedEncodingStream: () => (/* binding */ getAwsChunkedEncodingStream)
/* harmony export */ });
const getAwsChunkedEncodingStream = (readableStream, options) => {
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired = base64Encoder !== undefined &&
        bodyLengthChecker !== undefined &&
        checksumAlgorithmFn !== undefined &&
        checksumLocationName !== undefined &&
        streamHasher !== undefined;
    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : undefined;
    const reader = readableStream.getReader();
    return new ReadableStream({
        async pull(controller) {
            const { value, done } = await reader.read();
            if (done) {
                controller.enqueue(`0\r\n`);
                if (checksumRequired) {
                    const checksum = base64Encoder(await digest);
                    controller.enqueue(`${checksumLocationName}:${checksum}\r\n`);
                    controller.enqueue(`\r\n`);
                }
                controller.close();
            }
            else {
                controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r\n${value}\r\n`);
            }
        },
    });
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/headStream.browser.js":
/*!**************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-stream/dist-es/headStream.browser.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headStream: () => (/* binding */ headStream)
/* harmony export */ });
async function headStream(stream, bytes) {
    let byteLengthCounter = 0;
    const chunks = [];
    const reader = stream.getReader();
    let isDone = false;
    while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
            chunks.push(value);
            byteLengthCounter += value?.byteLength ?? 0;
        }
        if (byteLengthCounter >= bytes) {
            break;
        }
        isDone = done;
    }
    reader.releaseLock();
    const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
    let offset = 0;
    for (const chunk of chunks) {
        if (chunk.byteLength > collected.byteLength - offset) {
            collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
            break;
        }
        else {
            collected.set(chunk, offset);
        }
        offset += chunk.length;
    }
    return collected;
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/index.js":
/*!*************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-stream/dist-es/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChecksumStream: () => (/* reexport safe */ _checksum_ChecksumStream__WEBPACK_IMPORTED_MODULE_7__.ChecksumStream),
/* harmony export */   Uint8ArrayBlobAdapter: () => (/* reexport safe */ _blob_Uint8ArrayBlobAdapter__WEBPACK_IMPORTED_MODULE_0__.Uint8ArrayBlobAdapter),
/* harmony export */   createChecksumStream: () => (/* reexport safe */ _checksum_createChecksumStream__WEBPACK_IMPORTED_MODULE_6__.createChecksumStream),
/* harmony export */   getAwsChunkedEncodingStream: () => (/* reexport safe */ _getAwsChunkedEncodingStream__WEBPACK_IMPORTED_MODULE_1__.getAwsChunkedEncodingStream),
/* harmony export */   headStream: () => (/* reexport safe */ _headStream__WEBPACK_IMPORTED_MODULE_4__.headStream),
/* harmony export */   isReadableStream: () => (/* reexport safe */ _stream_type_check__WEBPACK_IMPORTED_MODULE_5__.isReadableStream),
/* harmony export */   sdkStreamMixin: () => (/* reexport safe */ _sdk_stream_mixin__WEBPACK_IMPORTED_MODULE_2__.sdkStreamMixin),
/* harmony export */   splitStream: () => (/* reexport safe */ _splitStream__WEBPACK_IMPORTED_MODULE_3__.splitStream)
/* harmony export */ });
/* harmony import */ var _blob_Uint8ArrayBlobAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blob/Uint8ArrayBlobAdapter */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js");
/* harmony import */ var _getAwsChunkedEncodingStream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAwsChunkedEncodingStream */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js");
/* harmony import */ var _sdk_stream_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk-stream-mixin */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js");
/* harmony import */ var _splitStream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splitStream */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/splitStream.browser.js");
/* harmony import */ var _headStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headStream */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/headStream.browser.js");
/* harmony import */ var _stream_type_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stream-type-check */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/stream-type-check.js");
/* harmony import */ var _checksum_createChecksumStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checksum/createChecksumStream */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js");
/* harmony import */ var _checksum_ChecksumStream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checksum/ChecksumStream */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js");










/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js":
/*!********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sdkStreamMixin: () => (/* binding */ sdkStreamMixin)
/* harmony export */ });
/* harmony import */ var _smithy_fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/fetch-http-handler */ "../nodejs/files/node_modules/@smithy/fetch-http-handler/dist-es/index.js");
/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-base64 */ "../nodejs/files/node_modules/@smithy/util-base64/dist-es/index.js");
/* harmony import */ var _smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/util-hex-encoding */ "../nodejs/files/node_modules/@smithy/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-utf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/index.js");
/* harmony import */ var _stream_type_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stream-type-check */ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/stream-type-check.js");





const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
const sdkStreamMixin = (stream) => {
    if (!isBlobInstance(stream) && !(0,_stream_type_check__WEBPACK_IMPORTED_MODULE_4__.isReadableStream)(stream)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = async () => {
        if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0,_smithy_fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__.streamCollector)(stream);
    };
    const blobToWebStream = (blob) => {
        if (typeof blob.stream !== "function") {
            throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\n" +
                "If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
    };
    return Object.assign(stream, {
        transformToByteArray: transformToByteArray,
        transformToString: async (encoding) => {
            const buf = await transformToByteArray();
            if (encoding === "base64") {
                return (0,_smithy_util_base64__WEBPACK_IMPORTED_MODULE_1__.toBase64)(buf);
            }
            else if (encoding === "hex") {
                return (0,_smithy_util_hex_encoding__WEBPACK_IMPORTED_MODULE_2__.toHex)(buf);
            }
            else if (encoding === undefined || encoding === "utf8" || encoding === "utf-8") {
                return (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUtf8)(buf);
            }
            else if (typeof TextDecoder === "function") {
                return new TextDecoder(encoding).decode(buf);
            }
            else {
                throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
            }
        },
        transformToWebStream: () => {
            if (transformed) {
                throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
            }
            transformed = true;
            if (isBlobInstance(stream)) {
                return blobToWebStream(stream);
            }
            else if ((0,_stream_type_check__WEBPACK_IMPORTED_MODULE_4__.isReadableStream)(stream)) {
                return stream;
            }
            else {
                throw new Error(`Cannot transform payload to web stream, got ${stream}`);
            }
        },
    });
};
const isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/splitStream.browser.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-stream/dist-es/splitStream.browser.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splitStream: () => (/* binding */ splitStream)
/* harmony export */ });
async function splitStream(stream) {
    if (typeof stream.stream === "function") {
        stream = stream.stream();
    }
    const readableStream = stream;
    return readableStream.tee();
}


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-stream/dist-es/stream-type-check.js":
/*!*************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-stream/dist-es/stream-type-check.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadableStream: () => (/* binding */ isReadableStream)
/* harmony export */ });
const isReadableStream = (stream) => typeof ReadableStream === "function" &&
    (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js":
/*!***************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUriPath: () => (/* binding */ escapeUriPath)
/* harmony export */ });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ "../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js");

const escapeUriPath = (uri) => uri.split("/").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri).join("/");


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUri: () => (/* binding */ escapeUri)
/* harmony export */ });
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/index.js":
/*!*****************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUri: () => (/* reexport safe */ _escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri),
/* harmony export */   escapeUriPath: () => (/* reexport safe */ _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__.escapeUriPath)
/* harmony export */ });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ "../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js");
/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape-uri-path */ "../nodejs/files/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js");




/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js":
/*!**********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)
/* harmony export */ });
const fromUtf8 = (input) => new TextEncoder().encode(input);


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/index.js":
/*!***********************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-utf8/dist-es/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js");
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toUint8Array */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js");
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUtf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js");





/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js":
/*!******************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js");

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return (0,_fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};


/***/ }),

/***/ "../nodejs/files/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js":
/*!********************************************************************************!*\
  !*** ../nodejs/files/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
const toUtf8 = (input) => {
    if (typeof input === "string") {
        return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return new TextDecoder("utf-8").decode(input);
};


/***/ }),

/***/ "../nodejs/files/node_modules/bowser/es5.js":
/*!**************************************************!*\
  !*** ../nodejs/files/node_modules/bowser/es5.js ***!
  \**************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ "../nodejs/files/node_modules/uuid/dist/esm-browser/native.js":
/*!********************************************************************!*\
  !*** ../nodejs/files/node_modules/uuid/dist/esm-browser/native.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "../nodejs/files/node_modules/uuid/dist/esm-browser/regex.js":
/*!*******************************************************************!*\
  !*** ../nodejs/files/node_modules/uuid/dist/esm-browser/regex.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "../nodejs/files/node_modules/uuid/dist/esm-browser/rng.js":
/*!*****************************************************************!*\
  !*** ../nodejs/files/node_modules/uuid/dist/esm-browser/rng.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "../nodejs/files/node_modules/uuid/dist/esm-browser/stringify.js":
/*!***********************************************************************!*\
  !*** ../nodejs/files/node_modules/uuid/dist/esm-browser/stringify.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "../nodejs/files/node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "../nodejs/files/node_modules/uuid/dist/esm-browser/v4.js":
/*!****************************************************************!*\
  !*** ../nodejs/files/node_modules/uuid/dist/esm-browser/v4.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "../nodejs/files/node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "../nodejs/files/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "../nodejs/files/node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "../nodejs/files/node_modules/uuid/dist/esm-browser/validate.js":
/*!**********************************************************************!*\
  !*** ../nodejs/files/node_modules/uuid/dist/esm-browser/validate.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "../nodejs/files/node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "../nodejs/files/node_modules/tslib/tslib.es6.mjs":
/*!********************************************************!*\
  !*** ../nodejs/files/node_modules/tslib/tslib.es6.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/package.json":
/*!*******************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/package.json ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"@aws-sdk/client-cognito-identity-provider","description":"AWS SDK for JavaScript Cognito Identity Provider Client for Node.js, Browser and React Native","version":"3.687.0","scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"node ../../scripts/compilation/inline client-cognito-identity-provider","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo cognito-identity-provider"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/client-sso-oidc":"3.687.0","@aws-sdk/client-sts":"3.687.0","@aws-sdk/core":"3.686.0","@aws-sdk/credential-provider-node":"3.687.0","@aws-sdk/middleware-host-header":"3.686.0","@aws-sdk/middleware-logger":"3.686.0","@aws-sdk/middleware-recursion-detection":"3.686.0","@aws-sdk/middleware-user-agent":"3.687.0","@aws-sdk/region-config-resolver":"3.686.0","@aws-sdk/types":"3.686.0","@aws-sdk/util-endpoints":"3.686.0","@aws-sdk/util-user-agent-browser":"3.686.0","@aws-sdk/util-user-agent-node":"3.687.0","@smithy/config-resolver":"^3.0.10","@smithy/core":"^2.5.1","@smithy/fetch-http-handler":"^4.0.0","@smithy/hash-node":"^3.0.8","@smithy/invalid-dependency":"^3.0.8","@smithy/middleware-content-length":"^3.0.10","@smithy/middleware-endpoint":"^3.2.1","@smithy/middleware-retry":"^3.0.25","@smithy/middleware-serde":"^3.0.8","@smithy/middleware-stack":"^3.0.8","@smithy/node-config-provider":"^3.1.9","@smithy/node-http-handler":"^3.2.5","@smithy/protocol-http":"^4.1.5","@smithy/smithy-client":"^3.4.2","@smithy/types":"^3.6.0","@smithy/url-parser":"^3.0.8","@smithy/util-base64":"^3.0.0","@smithy/util-body-length-browser":"^3.0.0","@smithy/util-body-length-node":"^3.0.0","@smithy/util-defaults-mode-browser":"^3.0.25","@smithy/util-defaults-mode-node":"^3.0.25","@smithy/util-endpoints":"^2.1.4","@smithy/util-middleware":"^3.0.8","@smithy/util-retry":"^3.0.8","@smithy/util-utf8":"^3.0.0","tslib":"^2.6.2"},"devDependencies":{"@tsconfig/node16":"16.1.3","@types/node":"^16.18.96","concurrently":"7.0.0","downlevel-dts":"0.10.1","rimraf":"3.0.2","typescript":"~4.9.5"},"engines":{"node":">=16.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*/**"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity-provider","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-cognito-identity-provider"}}');

/***/ }),

/***/ "../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json":
/*!********************************************************************************************!*\
  !*** ../nodejs/files/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il|mx)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"ap-southeast-5":{"description":"Asia Pacific (Malaysia)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"ca-west-1":{"description":"Canada West (Calgary)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"cloud.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{"eu-isoe-west-1":{"description":"EU ISOE West"}}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"csp.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{}}],"version":"1.1"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ../nodejs/files/cognitoAuth.mjs ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshTokenAuth: () => (/* binding */ refreshTokenAuth),
/* harmony export */   userPassAuth: () => (/* binding */ userPassAuth)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_cognito_identity_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-cognito-identity-provider */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/CognitoIdentityProviderClient.js");
/* harmony import */ var _aws_sdk_client_cognito_identity_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-cognito-identity-provider */ "../nodejs/files/node_modules/@aws-sdk/client-cognito-identity-provider/dist-es/commands/InitiateAuthCommand.js");



const ClientId = '6dspdoqn9q00f0v42c12qvkh5l';
const REGION = 'us-east-1';
const client = new _aws_sdk_client_cognito_identity_provider__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityProviderClient({region: REGION});

async function userPassAuth(USERNAME, PASSWORD) {
	const params = {
		AuthFlow: "USER_PASSWORD_AUTH",
		ClientId,
		AuthParameters : {
			USERNAME,
			PASSWORD
		}
	};

	try {
		const command = new _aws_sdk_client_cognito_identity_provider__WEBPACK_IMPORTED_MODULE_1__.InitiateAuthCommand(params);
		let data = await client.send(command);
		if(data.ChallengeName && data.ChallengeName == "NEW_PASSWORD_REQUIRED") {
			return {error: "NEW_PASSWORD_REQUIRED"};
		} else {
			return {IdToken: data.AuthenticationResult.IdToken};
		}
	} catch(err){
		return {error: err};
	}
};

async function refreshTokenAuth(ClientId, REFRESH_TOKEN) {
	const params = { 
		ClientId,
		AuthFlow: "REFRESH_TOKEN_AUTH",
		AuthParameters: {REFRESH_TOKEN}
	};

	try {
		const command = new _aws_sdk_client_cognito_identity_provider__WEBPACK_IMPORTED_MODULE_1__.InitiateAuthCommand(params);
		const r = await client.send(command);
		return r.AuthenticationResult;
	} catch(e){
		throw(e);
	}
};

})();

Cognito = __webpack_exports__;
/******/ })()
;