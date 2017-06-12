webpackJsonp([1],{

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: row;\n  width: 100%;\n  align-items: baseline;\n  justify-content: space-around;\n  margin: 20px 0 30px 0;\n  padding: 0 80px;\n  @media (max-width: ', ') {\n    padding: 0px;\n    margin: 0px;\n  }\n'], ['\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: row;\n  width: 100%;\n  align-items: baseline;\n  justify-content: space-around;\n  margin: 20px 0 30px 0;\n  padding: 0 80px;\n  @media (max-width: ', ') {\n    padding: 0px;\n    margin: 0px;\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  flex: 1;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  text-align center;\n  width: 33%;\n  opacity: ', ';\n  ', ';\n'], ['\n  flex: 1;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  text-align center;\n  width: 33%;\n  opacity: ', ';\n  ', ';\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  text-align: center;\n  font-size: 13px;\n  background: white;\n  border: 1px solid #333;\n  padding: 5px 10px;\n  border-radius: 50px;\n  margin-bottom: 4px;\n  width: auto;\n'], ['\n  display: inline-block;\n  text-align: center;\n  font-size: 13px;\n  background: white;\n  border: 1px solid #333;\n  padding: 5px 10px;\n  border-radius: 50px;\n  margin-bottom: 4px;\n  width: auto;\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 13px;\n'], ['\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 13px;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(5);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _styledComponents3 = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var ProgressBarContainer = _styledComponents2.default.div(_templateObject, _styledComponents3.mobileThresholdPixels);
	
	var Progress = _styledComponents2.default.div(_templateObject2, function (props) {
	  return props.isActive ? '1' : '0.5';
	}, function (props) {
	  return props.isActive ? 'transform: scale(1.1)' : '';
	});
	
	var ProgressDot = _styledComponents2.default.span(_templateObject3);
	
	var ProgressText = _styledComponents2.default.div(_templateObject4);
	
	var steps = [{ id: 1, name: 'Vêtements' }, { id: 2, name: 'Retouches' }, { id: 3, name: 'RDV' }, { id: 4, name: 'Coordonnées' }];
	
	var ProgressBar = function ProgressBar(_ref) {
	  var step = _ref.step;
	  return _react2.default.createElement(
	    ProgressBarContainer,
	    null,
	    steps.map(function (stepIt) {
	      return _react2.default.createElement(
	        Progress,
	        { key: stepIt.id, isActive: step === stepIt.id },
	        _react2.default.createElement(
	          ProgressDot,
	          null,
	          stepIt.id
	        ),
	        _react2.default.createElement(
	          ProgressText,
	          null,
	          stepIt.name
	        )
	      );
	    })
	  );
	};
	
	ProgressBar.propTypes = {
	  step: _react.PropTypes.number.isRequired
	};
	
	exports.default = ProgressBar;

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatExpiryDate = formatExpiryDate;
	exports.registerCard = registerCard;
	exports.isCardNumberValid = isCardNumberValid;
	exports.isCardTypeValid = isCardTypeValid;
	
	var _mangopayCardregistrationJsKit = __webpack_require__(426);
	
	var _mangopayCardregistrationJsKit2 = _interopRequireDefault(_mangopayCardregistrationJsKit);
	
	var _creditCard = __webpack_require__(367);
	
	var _creditCard2 = _interopRequireDefault(_creditCard);
	
	var _api = __webpack_require__(43);
	
	var _api2 = _interopRequireDefault(_api);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function formatExpiryDate(expiryDate) {
	  var trimedExpiryDate = expiryDate.replace(/ /g, '').replace(/\//g, '');
	  if (trimedExpiryDate.length === 6) {
	    // removed 20 of the year, eg 082017 => 0817
	    return trimedExpiryDate.slice(0, 2) + trimedExpiryDate.slice(4, 6);
	  }
	  return trimedExpiryDate;
	}
	
	function registerCard(cardData, customerId) {
	  var cardNumber = cardData.cardNumber,
	      cvc = cardData.cvc,
	      expiryDate = cardData.expiryDate;
	
	  return new Promise(function (resolve, reject) {
	    return (0, _api2.default)(customerId ? 'public/initCardRegistration/' + customerId : 'public/initCardRegistration').then(function (_ref) {
	      var cardRegistration = _ref.cardRegistration,
	          mangopayBaseURL = _ref.mangopayBaseURL,
	          mangopayClientId = _ref.mangopayClientId;
	
	      // Set MANGOPAY API base URL and Client ID
	      _mangopayCardregistrationJsKit2.default.cardRegistration.baseURL = mangopayBaseURL;
	      _mangopayCardregistrationJsKit2.default.cardRegistration.clientId = mangopayClientId;
	
	      // Initialize with card register data prepared on the server
	      _mangopayCardregistrationJsKit2.default.cardRegistration.init({
	        cardRegistrationURL: cardRegistration.CardRegistrationURL,
	        preregistrationData: cardRegistration.PreregistrationData,
	        accessKey: cardRegistration.AccessKey,
	        Id: cardRegistration.Id
	      });
	
	      var cardDataRequest = {
	        cardNumber: cardNumber.replace(/ /g, ''),
	        cardExpirationDate: formatExpiryDate(expiryDate),
	        cardCvx: cvc.replace(/ /g, ''),
	        cardType: cardRegistration.CardType.replace(/ /g, '')
	      };
	
	      _mangopayCardregistrationJsKit2.default.cardRegistration.registerCard(cardDataRequest, function (res) {
	        // Success, you can use res.CardId now that points to registered card
	        resolve(res);
	      }, function (res) {
	        var error = res;
	        error.cardNumber = cardDataRequest.cardNumber && cardDataRequest.cardNumber.replace(/\d/g, 'd');
	        error.cvv = cardDataRequest.cardCvx && cardDataRequest.cardCvx.replace(/\d/g, 'd');
	        error.expirationDate = cardDataRequest.cardExpirationDate;
	        error.cardType = cardDataRequest.cardType;
	        Raven.captureException(JSON.stringify(error)); // eslint-disable-line
	        // Handle error, see res.ResultCode and res.ResultMessage
	        reject({
	          error: res.ResultMessage,
	          errorCode: res.ResultCode
	        });
	      });
	    });
	  });
	}
	
	function isCardNumberValid() {
	  var cardNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	  return _creditCard2.default.luhn(cardNumber);
	}
	
	function isCardTypeValid() {
	  var cardNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	  return _creditCard2.default.determineCardType(cardNumber, { allowPartial: true }) !== 'AMERICANEXPRESS';
	}

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// Generated by CoffeeScript 1.10.0
	(function() {
	  var Payment, QJ, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlash, formatMonthExpiry, hasTextSelected, luhnCheck, reFormatCardNumber, restrictCVC, restrictCardNumber, restrictCombinedExpiry, restrictExpiry, restrictMonthExpiry, restrictNumeric, restrictYearExpiry, setCardType,
	    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
	  QJ = __webpack_require__(432);
	
	  defaultFormat = /(\d{1,4})/g;
	
	  cards = [
	    {
	      type: 'amex',
	      pattern: /^3[47]/,
	      format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
	      length: [15],
	      cvcLength: [4],
	      luhn: true
	    }, {
	      type: 'dankort',
	      pattern: /^5019/,
	      format: defaultFormat,
	      length: [16],
	      cvcLength: [3],
	      luhn: true
	    }, {
	      type: 'dinersclub',
	      pattern: /^(36|38|30[0-5])/,
	      format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
	      length: [14],
	      cvcLength: [3],
	      luhn: true
	    }, {
	      type: 'discover',
	      pattern: /^(6011|65|64[4-9]|622)/,
	      format: defaultFormat,
	      length: [16],
	      cvcLength: [3],
	      luhn: true
	    }, {
	      type: 'jcb',
	      pattern: /^35/,
	      format: defaultFormat,
	      length: [16],
	      cvcLength: [3],
	      luhn: true
	    }, {
	      type: 'laser',
	      pattern: /^(6706|6771|6709)/,
	      format: defaultFormat,
	      length: [16, 17, 18, 19],
	      cvcLength: [3],
	      luhn: true
	    }, {
	      type: 'maestro',
	      pattern: /^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,
	      format: defaultFormat,
	      length: [12, 13, 14, 15, 16, 17, 18, 19],
	      cvcLength: [3],
	      luhn: true
	    }, {
	      type: 'mastercard',
	      pattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
	      format: defaultFormat,
	      length: [16],
	      cvcLength: [3],
	      luhn: true
	    }, {
	      type: 'unionpay',
	      pattern: /^62/,
	      format: defaultFormat,
	      length: [16, 17, 18, 19],
	      cvcLength: [3],
	      luhn: false
	    }, {
	      type: 'visaelectron',
	      pattern: /^4(026|17500|405|508|844|91[37])/,
	      format: defaultFormat,
	      length: [16],
	      cvcLength: [3],
	      luhn: true
	    }, {
	      type: 'elo',
	      pattern: /^(4011|438935|45(1416|76|7393)|50(4175|6699|67|90[4-7])|63(6297|6368))/,
	      format: defaultFormat,
	      length: [16],
	      cvcLength: [3],
	      luhn: true
	    }, {
	      type: 'visa',
	      pattern: /^4/,
	      format: defaultFormat,
	      length: [13, 16, 19],
	      cvcLength: [3],
	      luhn: true
	    }
	  ];
	
	  cardFromNumber = function(num) {
	    var card, j, len;
	    num = (num + '').replace(/\D/g, '');
	    for (j = 0, len = cards.length; j < len; j++) {
	      card = cards[j];
	      if (card.pattern.test(num)) {
	        return card;
	      }
	    }
	  };
	
	  cardFromType = function(type) {
	    var card, j, len;
	    for (j = 0, len = cards.length; j < len; j++) {
	      card = cards[j];
	      if (card.type === type) {
	        return card;
	      }
	    }
	  };
	
	  luhnCheck = function(num) {
	    var digit, digits, j, len, odd, sum;
	    odd = true;
	    sum = 0;
	    digits = (num + '').split('').reverse();
	    for (j = 0, len = digits.length; j < len; j++) {
	      digit = digits[j];
	      digit = parseInt(digit, 10);
	      if ((odd = !odd)) {
	        digit *= 2;
	      }
	      if (digit > 9) {
	        digit -= 9;
	      }
	      sum += digit;
	    }
	    return sum % 10 === 0;
	  };
	
	  hasTextSelected = function(target) {
	    var e, error, ref;
	    try {
	      if ((target.selectionStart != null) && target.selectionStart !== target.selectionEnd) {
	        return true;
	      }
	      if ((typeof document !== "undefined" && document !== null ? (ref = document.selection) != null ? ref.createRange : void 0 : void 0) != null) {
	        if (document.selection.createRange().text) {
	          return true;
	        }
	      }
	    } catch (error) {
	      e = error;
	    }
	    return false;
	  };
	
	  reFormatCardNumber = function(e) {
	    return setTimeout((function(_this) {
	      return function() {
	        var target, value;
	        target = e.target;
	        value = QJ.val(target);
	        value = Payment.fns.formatCardNumber(value);
	        QJ.val(target, value);
	        return QJ.trigger(target, 'change');
	      };
	    })(this));
	  };
	
	  formatCardNumber = function(e) {
	    var card, digit, i, j, len, length, re, target, upperLength, upperLengths, value;
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    target = e.target;
	    value = QJ.val(target);
	    card = cardFromNumber(value + digit);
	    length = (value.replace(/\D/g, '') + digit).length;
	    upperLengths = [16];
	    if (card) {
	      upperLengths = card.length;
	    }
	    for (i = j = 0, len = upperLengths.length; j < len; i = ++j) {
	      upperLength = upperLengths[i];
	      if (length >= upperLength && upperLengths[i + 1]) {
	        continue;
	      }
	      if (length >= upperLength) {
	        return;
	      }
	    }
	    if (hasTextSelected(target)) {
	      return;
	    }
	    if (card && card.type === 'amex') {
	      re = /^(\d{4}|\d{4}\s\d{6})$/;
	    } else {
	      re = /(?:^|\s)(\d{4})$/;
	    }
	    if (re.test(value)) {
	      e.preventDefault();
	      QJ.val(target, value + ' ' + digit);
	      return QJ.trigger(target, 'change');
	    }
	  };
	
	  formatBackCardNumber = function(e) {
	    var target, value;
	    target = e.target;
	    value = QJ.val(target);
	    if (e.meta) {
	      return;
	    }
	    if (e.which !== 8) {
	      return;
	    }
	    if (hasTextSelected(target)) {
	      return;
	    }
	    if (/\d\s$/.test(value)) {
	      e.preventDefault();
	      QJ.val(target, value.replace(/\d\s$/, ''));
	      return QJ.trigger(target, 'change');
	    } else if (/\s\d?$/.test(value)) {
	      e.preventDefault();
	      QJ.val(target, value.replace(/\s\d?$/, ''));
	      return QJ.trigger(target, 'change');
	    }
	  };
	
	  formatExpiry = function(e) {
	    var digit, target, val;
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    target = e.target;
	    val = QJ.val(target) + digit;
	    if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
	      e.preventDefault();
	      QJ.val(target, "0" + val + " / ");
	      return QJ.trigger(target, 'change');
	    } else if (/^\d\d$/.test(val)) {
	      e.preventDefault();
	      QJ.val(target, val + " / ");
	      return QJ.trigger(target, 'change');
	    }
	  };
	
	  formatMonthExpiry = function(e) {
	    var digit, target, val;
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    target = e.target;
	    val = QJ.val(target) + digit;
	    if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
	      e.preventDefault();
	      QJ.val(target, "0" + val);
	      return QJ.trigger(target, 'change');
	    } else if (/^\d\d$/.test(val)) {
	      e.preventDefault();
	      QJ.val(target, "" + val);
	      return QJ.trigger(target, 'change');
	    }
	  };
	
	  formatForwardExpiry = function(e) {
	    var digit, target, val;
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    target = e.target;
	    val = QJ.val(target);
	    if (/^\d\d$/.test(val)) {
	      QJ.val(target, val + " / ");
	      return QJ.trigger(target, 'change');
	    }
	  };
	
	  formatForwardSlash = function(e) {
	    var slash, target, val;
	    slash = String.fromCharCode(e.which);
	    if (slash !== '/') {
	      return;
	    }
	    target = e.target;
	    val = QJ.val(target);
	    if (/^\d$/.test(val) && val !== '0') {
	      QJ.val(target, "0" + val + " / ");
	      return QJ.trigger(target, 'change');
	    }
	  };
	
	  formatBackExpiry = function(e) {
	    var target, value;
	    if (e.metaKey) {
	      return;
	    }
	    target = e.target;
	    value = QJ.val(target);
	    if (e.which !== 8) {
	      return;
	    }
	    if (hasTextSelected(target)) {
	      return;
	    }
	    if (/\d(\s|\/)+$/.test(value)) {
	      e.preventDefault();
	      QJ.val(target, value.replace(/\d(\s|\/)*$/, ''));
	      return QJ.trigger(target, 'change');
	    } else if (/\s\/\s?\d?$/.test(value)) {
	      e.preventDefault();
	      QJ.val(target, value.replace(/\s\/\s?\d?$/, ''));
	      return QJ.trigger(target, 'change');
	    }
	  };
	
	  restrictNumeric = function(e) {
	    var input;
	    if (e.metaKey || e.ctrlKey) {
	      return true;
	    }
	    if (e.which === 32) {
	      return e.preventDefault();
	    }
	    if (e.which === 0) {
	      return true;
	    }
	    if (e.which < 33) {
	      return true;
	    }
	    input = String.fromCharCode(e.which);
	    if (!/[\d\s]/.test(input)) {
	      return e.preventDefault();
	    }
	  };
	
	  restrictCardNumber = function(e) {
	    var card, digit, target, value;
	    target = e.target;
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    if (hasTextSelected(target)) {
	      return;
	    }
	    value = (QJ.val(target) + digit).replace(/\D/g, '');
	    card = cardFromNumber(value);
	    if (card) {
	      if (!(value.length <= card.length[card.length.length - 1])) {
	        return e.preventDefault();
	      }
	    } else {
	      if (!(value.length <= 16)) {
	        return e.preventDefault();
	      }
	    }
	  };
	
	  restrictExpiry = function(e, length) {
	    var digit, target, value;
	    target = e.target;
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    if (hasTextSelected(target)) {
	      return;
	    }
	    value = QJ.val(target) + digit;
	    value = value.replace(/\D/g, '');
	    if (value.length > length) {
	      return e.preventDefault();
	    }
	  };
	
	  restrictCombinedExpiry = function(e) {
	    return restrictExpiry(e, 6);
	  };
	
	  restrictMonthExpiry = function(e) {
	    return restrictExpiry(e, 2);
	  };
	
	  restrictYearExpiry = function(e) {
	    return restrictExpiry(e, 4);
	  };
	
	  restrictCVC = function(e) {
	    var digit, target, val;
	    target = e.target;
	    digit = String.fromCharCode(e.which);
	    if (!/^\d+$/.test(digit)) {
	      return;
	    }
	    if (hasTextSelected(target)) {
	      return;
	    }
	    val = QJ.val(target) + digit;
	    if (!(val.length <= 4)) {
	      return e.preventDefault();
	    }
	  };
	
	  setCardType = function(e) {
	    var allTypes, card, cardType, target, val;
	    target = e.target;
	    val = QJ.val(target);
	    cardType = Payment.fns.cardType(val) || 'unknown';
	    if (!QJ.hasClass(target, cardType)) {
	      allTypes = (function() {
	        var j, len, results;
	        results = [];
	        for (j = 0, len = cards.length; j < len; j++) {
	          card = cards[j];
	          results.push(card.type);
	        }
	        return results;
	      })();
	      QJ.removeClass(target, 'unknown');
	      QJ.removeClass(target, allTypes.join(' '));
	      QJ.addClass(target, cardType);
	      QJ.toggleClass(target, 'identified', cardType !== 'unknown');
	      return QJ.trigger(target, 'payment.cardType', cardType);
	    }
	  };
	
	  Payment = (function() {
	    function Payment() {}
	
	    Payment.fns = {
	      cardExpiryVal: function(value) {
	        var month, prefix, ref, year;
	        value = value.replace(/\s/g, '');
	        ref = value.split('/', 2), month = ref[0], year = ref[1];
	        if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
	          prefix = (new Date).getFullYear();
	          prefix = prefix.toString().slice(0, 2);
	          year = prefix + year;
	        }
	        month = parseInt(month, 10);
	        year = parseInt(year, 10);
	        return {
	          month: month,
	          year: year
	        };
	      },
	      validateCardNumber: function(num) {
	        var card, ref;
	        num = (num + '').replace(/\s+|-/g, '');
	        if (!/^\d+$/.test(num)) {
	          return false;
	        }
	        card = cardFromNumber(num);
	        if (!card) {
	          return false;
	        }
	        return (ref = num.length, indexOf.call(card.length, ref) >= 0) && (card.luhn === false || luhnCheck(num));
	      },
	      validateCardExpiry: function(month, year) {
	        var currentTime, expiry, prefix, ref, ref1;
	        if (typeof month === 'object' && 'month' in month) {
	          ref = month, month = ref.month, year = ref.year;
	        } else if (typeof month === 'string' && indexOf.call(month, '/') >= 0) {
	          ref1 = Payment.fns.cardExpiryVal(month), month = ref1.month, year = ref1.year;
	        }
	        if (!(month && year)) {
	          return false;
	        }
	        month = QJ.trim(month);
	        year = QJ.trim(year);
	        if (!/^\d+$/.test(month)) {
	          return false;
	        }
	        if (!/^\d+$/.test(year)) {
	          return false;
	        }
	        month = parseInt(month, 10);
	        if (!(month && month <= 12)) {
	          return false;
	        }
	        if (year.length === 2) {
	          prefix = (new Date).getFullYear();
	          prefix = prefix.toString().slice(0, 2);
	          year = prefix + year;
	        }
	        expiry = new Date(year, month);
	        currentTime = new Date;
	        expiry.setMonth(expiry.getMonth() - 1);
	        expiry.setMonth(expiry.getMonth() + 1, 1);
	        return expiry > currentTime;
	      },
	      validateCardCVC: function(cvc, type) {
	        var ref, ref1;
	        cvc = QJ.trim(cvc);
	        if (!/^\d+$/.test(cvc)) {
	          return false;
	        }
	        if (type && cardFromType(type)) {
	          return ref = cvc.length, indexOf.call((ref1 = cardFromType(type)) != null ? ref1.cvcLength : void 0, ref) >= 0;
	        } else {
	          return cvc.length >= 3 && cvc.length <= 4;
	        }
	      },
	      cardType: function(num) {
	        var ref;
	        if (!num) {
	          return null;
	        }
	        return ((ref = cardFromNumber(num)) != null ? ref.type : void 0) || null;
	      },
	      formatCardNumber: function(num) {
	        var card, groups, ref, upperLength;
	        card = cardFromNumber(num);
	        if (!card) {
	          return num;
	        }
	        upperLength = card.length[card.length.length - 1];
	        num = num.replace(/\D/g, '');
	        num = num.slice(0, upperLength);
	        if (card.format.global) {
	          return (ref = num.match(card.format)) != null ? ref.join(' ') : void 0;
	        } else {
	          groups = card.format.exec(num);
	          if (groups != null) {
	            groups.shift();
	          }
	          return groups != null ? groups.join(' ') : void 0;
	        }
	      }
	    };
	
	    Payment.restrictNumeric = function(el) {
	      return QJ.on(el, 'keypress', restrictNumeric);
	    };
	
	    Payment.cardExpiryVal = function(el) {
	      return Payment.fns.cardExpiryVal(QJ.val(el));
	    };
	
	    Payment.formatCardCVC = function(el) {
	      Payment.restrictNumeric(el);
	      QJ.on(el, 'keypress', restrictCVC);
	      return el;
	    };
	
	    Payment.formatCardExpiry = function(el) {
	      var month, year;
	      Payment.restrictNumeric(el);
	      if (el.length && el.length === 2) {
	        month = el[0], year = el[1];
	        this.formatCardExpiryMultiple(month, year);
	      } else {
	        QJ.on(el, 'keypress', restrictCombinedExpiry);
	        QJ.on(el, 'keypress', formatExpiry);
	        QJ.on(el, 'keypress', formatForwardSlash);
	        QJ.on(el, 'keypress', formatForwardExpiry);
	        QJ.on(el, 'keydown', formatBackExpiry);
	      }
	      return el;
	    };
	
	    Payment.formatCardExpiryMultiple = function(month, year) {
	      QJ.on(month, 'keypress', restrictMonthExpiry);
	      QJ.on(month, 'keypress', formatMonthExpiry);
	      return QJ.on(year, 'keypress', restrictYearExpiry);
	    };
	
	    Payment.formatCardNumber = function(el) {
	      Payment.restrictNumeric(el);
	      QJ.on(el, 'keypress', restrictCardNumber);
	      QJ.on(el, 'keypress', formatCardNumber);
	      QJ.on(el, 'keydown', formatBackCardNumber);
	      QJ.on(el, 'keyup blur', setCardType);
	      QJ.on(el, 'paste', reFormatCardNumber);
	      return el;
	    };
	
	    Payment.getCardArray = function() {
	      return cards;
	    };
	
	    Payment.setCardArray = function(cardArray) {
	      cards = cardArray;
	      return true;
	    };
	
	    Payment.addToCardArray = function(cardObject) {
	      return cards.push(cardObject);
	    };
	
	    Payment.removeFromCardArray = function(type) {
	      var key, value;
	      for (key in cards) {
	        value = cards[key];
	        if (value.type === type) {
	          cards.splice(key, 1);
	        }
	      }
	      return true;
	    };
	
	    return Payment;
	
	  })();
	
	  module.exports = Payment;
	
	  global.Payment = Payment;
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _cardReact = __webpack_require__(364);
	
	var _cardReact2 = _interopRequireDefault(_cardReact);
	
	var _styledComponents = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CreditCard = function CreditCard(_ref) {
	  var _onChange = _ref.onChange,
	      formError = _ref.formError,
	      cardNumber = _ref.cardNumber,
	      expiryDate = _ref.expiryDate,
	      cvc = _ref.cvc,
	      error = _ref.error;
	  return _react2.default.createElement(
	    _cardReact2.default,
	    {
	      container: 'card-wrapper',
	      formInputsNames: {
	        number: 'CCnumber',
	        expiry: 'CCexpiry',
	        cvc: 'CCcvc',
	        name: 'CCname'
	      },
	      initialValues: {
	        name: ' ',
	        number: cardNumber,
	        expiry: expiryDate,
	        cvc: cvc
	      },
	      classes: {
	        valid: 'valid-input', // optional — default 'jp-card-valid'
	        invalid: 'invalid-input' },
	      // optional — default 'jp-card-invalid'
	      formatting: true // specify whether you want to format the form inputs or not
	    },
	    _react2.default.createElement('div', { id: 'card-wrapper' }),
	    _react2.default.createElement(
	      _styledComponents.Form1,
	      null,
	      _react2.default.createElement(_styledComponents.Input, {
	        placeholder: 'Num\xE9ro de carte', type: 'text', name: 'CCnumber',
	        onChange: function onChange(e) {
	          return _onChange('cardNumber', e.target.value);
	        },
	        error: formError && !cardNumber
	      }),
	      error && _react2.default.createElement(
	        _styledComponents.ErrorText,
	        null,
	        error
	      ),
	      _react2.default.createElement(
	        _styledComponents.Row,
	        null,
	        _react2.default.createElement(_styledComponents.Input, {
	          half: true, placeholder: 'MM / AA (date d\u2018expiration)', type: 'text', name: 'CCexpiry',
	          onChange: function onChange(e) {
	            return _onChange('expiryDate', e.target.value);
	          },
	          error: formError && !expiryDate
	        }),
	        _react2.default.createElement(_styledComponents.Input, {
	          half: true, placeholder: 'CVC (3 chiffres au dos)', type: 'text', name: 'CCcvc',
	          onChange: function onChange(e) {
	            return _onChange('cvc', e.target.value);
	          },
	          error: formError && !cvc
	        })
	      )
	    )
	  );
	};
	
	CreditCard.propTypes = {
	  onChange: _react.PropTypes.func.isRequired,
	  formError: _react.PropTypes.bool,
	  cardNumber: _react.PropTypes.string,
	  expiryDate: _react.PropTypes.string,
	  cvc: _react.PropTypes.string,
	  error: _react.PropTypes.string
	};
	
	CreditCard.defaultProps = {
	  formError: false,
	  cardNumber: '',
	  expiryDate: '',
	  cvc: '',
	  error: ''
	};
	
	exports.default = CreditCard;

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n  object-fit: contain;\n  width: 100%;\n'], ['\n  object-fit: contain;\n  width: 100%;\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  text-align: center;\n'], ['\n  text-align: center;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(5);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _styledComponents3 = __webpack_require__(3);
	
	var _CreditCard = __webpack_require__(311);
	
	var _CreditCard2 = _interopRequireDefault(_CreditCard);
	
	var _PromoCodeField = __webpack_require__(337);
	
	var _PromoCodeField2 = _interopRequireDefault(_PromoCodeField);
	
	var _zipcode = __webpack_require__(360);
	
	var _zipcode2 = _interopRequireDefault(_zipcode);
	
	var _mangopay = __webpack_require__(586);
	
	var _mangopay2 = _interopRequireDefault(_mangopay);
	
	var _mangopay3 = __webpack_require__(109);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	// import FacebookLogin from 'react-facebook-login';
	
	
	var Img = _styledComponents2.default.img(_templateObject);
	
	var P = _styledComponents2.default.p(_templateObject2);
	
	var InfosBlock = function (_React$Component) {
	  _inherits(InfosBlock, _React$Component);
	
	  function InfosBlock(props) {
	    _classCallCheck(this, InfosBlock);
	
	    var _this = _possibleConstructorReturn(this, (InfosBlock.__proto__ || Object.getPrototypeOf(InfosBlock)).call(this, props));
	
	    var _ref = props.customer || {},
	        firstname = _ref.firstname,
	        lastname = _ref.lastname,
	        password = _ref.password,
	        email = _ref.email,
	        phone = _ref.phone,
	        address = _ref.address;
	
	    var _ref2 = address || {},
	        street = _ref2.street,
	        zipcode = _ref2.zipcode,
	        locality = _ref2.locality,
	        comment = _ref2.comment;
	
	    var newAccount = !(props.customer && props.customer.firstname);
	    _this.state = { firstname: firstname, lastname: lastname, password: password, email: email, phone: phone, street: street, zipcode: zipcode, locality: locality, comment: comment, newAccount: newAccount };
	    _this.inputChange = _this.inputChange.bind(_this);
	    _this.submitRegister = _this.submitRegister.bind(_this);
	    _this.submitLoggedInOrder = _this.submitLoggedInOrder.bind(_this);
	    _this.submit = _this.submit.bind(_this);
	    _this.checkPromoCode = _this.checkPromoCode.bind(_this);
	    return _this;
	  }
	
	  _createClass(InfosBlock, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var newAccount = !(nextProps.customer && nextProps.customer.firstname);
	      this.setState({ newAccount: newAccount });
	    }
	  }, {
	    key: 'validateCardNumber',
	    value: function validateCardNumber(cardNumber) {
	      var cardError = (0, _mangopay3.isCardTypeValid)(cardNumber) ? '' : 'les cartes American Express (Amex) ne sont pas supportées';
	      this.setState({ cardError: cardError });
	    }
	  }, {
	    key: 'inputChange',
	    value: function inputChange(field, value) {
	      if (field === 'zipcode') {
	        this.setState({ zipcodeError: (0, _zipcode2.default)(value) });
	      } else if (field === 'passwordCheck') {
	        this.setState({ passwordCheckError: value !== this.state.password });
	      } else if (field === 'cardNumber') {
	        this.validateCardNumber(value);
	      }
	      this.setState(_defineProperty({}, field, value));
	    }
	  }, {
	    key: 'submitRegister',
	    value: function submitRegister() {
	      var _state = this.state,
	          firstname = _state.firstname,
	          lastname = _state.lastname,
	          password = _state.password,
	          email = _state.email,
	          phone = _state.phone,
	          street = _state.street,
	          zipcode = _state.zipcode,
	          locality = _state.locality,
	          comment = _state.comment,
	          expiryDate = _state.expiryDate,
	          cvc = _state.cvc,
	          cardNumber = _state.cardNumber,
	          cardId = _state.cardId;
	
	      var address = { street: street, zipcode: zipcode, locality: locality, comment: comment };
	      var customer = { firstname: firstname, lastname: lastname, password: password, email: email, phone: phone, address: address };
	      var card = { expiryDate: expiryDate, cvc: cvc, cardNumber: cardNumber, cardId: cardId };
	      this.props.submitRegister(customer, card);
	    }
	  }, {
	    key: 'submitLoggedInOrder',
	    value: function submitLoggedInOrder() {
	      var _state2 = this.state,
	          street = _state2.street,
	          zipcode = _state2.zipcode,
	          locality = _state2.locality,
	          comment = _state2.comment,
	          expiryDate = _state2.expiryDate,
	          cvc = _state2.cvc,
	          cardNumber = _state2.cardNumber,
	          cardId = _state2.cardId;
	
	      var customer = { address: { street: street, zipcode: zipcode, locality: locality, comment: comment } };
	      var card = { expiryDate: expiryDate, cvc: cvc, cardNumber: cardNumber, cardId: cardId };
	      this.props.submitLoggedInOrder(customer, card);
	    }
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      var _this2 = this;
	
	      var fields = ['firstname', 'lastname', 'email', 'phone', 'street', 'zipcode', 'locality'];
	      var passwordSelected = this.state.password || !this.state.newAccount;
	      var cardSelected = this.state.expiryDate && this.state.cvc && this.state.cardNumber && (0, _mangopay3.isCardTypeValid)(this.state.cardNumber) || this.state.cardId;
	      var emptyFields = fields.filter(function (field) {
	        return !_this2.state[field];
	      });
	      return emptyFields.length === 0 && !this.state.passwordCheckError && !this.state.zipcodeError && cardSelected && passwordSelected;
	    }
	  }, {
	    key: 'submit',
	    value: function submit() {
	      if (!this.isValid()) {
	        return this.setState({ formError: true });
	      }
	      return this.state.newAccount ? this.submitRegister() : this.submitLoggedInOrder();
	    }
	  }, {
	    key: 'checkPromoCode',
	    value: function checkPromoCode(promoCode) {
	      this.props.checkPromoCode(promoCode);
	    }
	  }, {
	    key: 'renderCreditCard',
	    value: function renderCreditCard() {
	      return _react2.default.createElement(_CreditCard2.default, {
	        onChange: this.inputChange,
	        formError: this.state.formError,
	        error: this.state.cardError,
	        cardNumber: this.state.cardNumber,
	        expiryDate: this.state.expiryDate,
	        cvc: this.state.cvc
	      });
	    }
	  }, {
	    key: 'renderForm',
	    value: function renderForm() {
	      var _this3 = this;
	
	      var rdv = this.props.rdv;
	
	      var rdvDate = rdv.format('D MMMM');
	      var rdvBegin = rdv.format('H[h]mm');
	      var rdvEnd = rdv.clone().add(30, 'minute').format('H[h]mm');
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _styledComponents3.Form1,
	          null,
	          _react2.default.createElement(
	            _styledComponents3.Title4Top,
	            null,
	            'Mes coordonn\xE9es'
	          ),
	          _react2.default.createElement(
	            _styledComponents3.Row,
	            null,
	            _react2.default.createElement(_styledComponents3.Input, {
	              half: true, type: 'text', placeholder: 'Votre nom', value: this.state.lastname,
	              onChange: function onChange(e) {
	                return _this3.inputChange('lastname', e.target.value);
	              },
	              error: this.state.formError && !this.state.lastname
	            }),
	            _react2.default.createElement(_styledComponents3.Input, {
	              half: true, type: 'text', placeholder: 'Votre pr\xE9nom', value: this.state.firstname,
	              onChange: function onChange(e) {
	                return _this3.inputChange('firstname', e.target.value);
	              },
	              error: this.state.formError && !this.state.firstname
	            })
	          ),
	          _react2.default.createElement(
	            _styledComponents3.Row,
	            null,
	            _react2.default.createElement(_styledComponents3.Input, {
	              half: true, type: 'email', placeholder: 'Adresse email', value: this.state.email,
	              onChange: function onChange(e) {
	                return _this3.inputChange('email', e.target.value);
	              },
	              error: this.state.formError && !this.state.email
	            }),
	            _react2.default.createElement(_styledComponents3.Input, {
	              half: true, type: 'tel', placeholder: 'T\xE9l\xE9phone', value: this.state.phone,
	              onChange: function onChange(e) {
	                return _this3.inputChange('phone', e.target.value);
	              },
	              error: this.state.formError && !this.state.phone
	            })
	          ),
	          this.state.newAccount && _react2.default.createElement(_styledComponents3.Input, {
	            type: 'password', placeholder: 'Votre mot de passe',
	            onChange: function onChange(e) {
	              return _this3.inputChange('password', e.target.value);
	            },
	            value: this.state.password,
	            error: this.state.formError && !this.state.password
	          }),
	          this.state.newAccount && _react2.default.createElement(_styledComponents3.Input, {
	            type: 'password', placeholder: 'Confirmer votre mot de passe',
	            onChange: function onChange(e) {
	              return _this3.inputChange('passwordCheck', e.target.value);
	            },
	            value: this.state.passwordCheck
	          }),
	          this.state.passwordCheckError && _react2.default.createElement(
	            _styledComponents3.ErrorText,
	            null,
	            'Les 2 mots de passe ne correspondent pas'
	          ),
	          _react2.default.createElement(
	            _styledComponents3.Title4Top,
	            null,
	            'Mon adresse'
	          ),
	          _react2.default.createElement(_styledComponents3.Input, {
	            type: 'text', placeholder: 'Rue et num\xE9ro de rue', value: this.state.street,
	            onChange: function onChange(e) {
	              return _this3.inputChange('street', e.target.value);
	            },
	            error: this.state.formError && !this.state.street
	          }),
	          _react2.default.createElement(
	            _styledComponents3.Row,
	            null,
	            _react2.default.createElement(_styledComponents3.Input, {
	              half: true, type: 'text', placeholder: 'Code postal', value: this.state.zipcode,
	              onChange: function onChange(e) {
	                return _this3.inputChange('zipcode', e.target.value);
	              },
	              error: this.state.formError && !this.state.zipcode
	            }),
	            _react2.default.createElement(_styledComponents3.Input, {
	              half: true, type: 'text', placeholder: 'Ville', value: this.state.locality,
	              onChange: function onChange(e) {
	                return _this3.inputChange('locality', e.target.value);
	              },
	              error: this.state.formError && !this.state.locality
	            })
	          ),
	          this.state.zipcodeError,
	          _react2.default.createElement(_styledComponents3.Input, {
	            type: 'text', placeholder: 'Compl\xE9ment (digicode, \xE9tage, etc)', value: this.state.comment,
	            onChange: function onChange(e) {
	              return _this3.inputChange('comment', e.target.value);
	            }
	          })
	        ),
	        _react2.default.createElement(
	          _styledComponents3.Title4Top,
	          null,
	          'Mon moyen de paiement'
	        ),
	        _react2.default.createElement(
	          P,
	          null,
	          'Nous prenons d\u2018abord l\u2018empreinte de votre carte en effectuant une pr\xE9autorisation de 1\u20AC. Vous serez d\xE9bit\xE9s du montant exacte de votre commande \xE0 la suite du premier RDV avec le couturier.'
	        ),
	        this.state.newAccount ? this.renderCreditCard() : _react2.default.createElement(
	          'div',
	          null,
	          this.state.showCreditCard || !this.props.customer.cards || this.props.customer.cards.length === 0 ? this.renderCreditCard() : _react2.default.createElement(
	            'div',
	            null,
	            this.props.customer.cards && this.props.customer.cards.map(function (card) {
	              return _react2.default.createElement(
	                _styledComponents3.Choice,
	                {
	                  isSelected: _this3.state.cardId === card.id, key: card.id,
	                  onClick: function onClick() {
	                    return _this3.inputChange('cardId', card.id);
	                  }
	                },
	                card.alias,
	                ' - ',
	                card.expirationDate.slice(0, 2),
	                ' / ',
	                card.expirationDate.slice(2, 4)
	              );
	            }),
	            _react2.default.createElement(
	              _styledComponents3.Choice,
	              { onClick: function onClick() {
	                  return _this3.setState({ showCreditCard: true });
	                } },
	              'Ajouter une nouvelle carte bancaire'
	            )
	          )
	        ),
	        _react2.default.createElement(_PromoCodeField2.default, {
	          checkPromoCode: this.checkPromoCode,
	          promoCode: this.props.promoCode,
	          errorPromoCode: this.props.errorPromoCode
	        }),
	        _react2.default.createElement(
	          _styledComponents3.Title4Top,
	          null,
	          'R\xE9capitulatif'
	        ),
	        _react2.default.createElement(
	          _styledComponents3.Total,
	          null,
	          'Rdv le ',
	          rdvDate,
	          ' entre ',
	          rdvBegin,
	          ' et ',
	          rdvEnd
	        ),
	        _react2.default.createElement(
	          _styledComponents3.Total,
	          null,
	          this.props.promoCode && this.props.promoCode.value ? _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              'Total des retouches : ',
	              this.props.total,
	              '\u20AC'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Code promo : -',
	              this.props.promoCode.value,
	              this.props.promoCode.unit === 'EUROS' ? '€' : '%'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Frais de livraison : ',
	              this.props.deliveryFee > 0 ? this.props.deliveryFee + '\u20AC (*)' : 'offerts 😀'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Montant total : ',
	              this.props.totalPaid,
	              '\u20AC'
	            )
	          ) : _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              'Total des retouches : ',
	              this.props.total,
	              '\u20AC'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Frais de livraison : ',
	              this.props.deliveryFee > 0 ? this.props.deliveryFee + '\u20AC (*)' : 'offerts 😀'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Montant total : ',
	              this.props.totalPaid,
	              '\u20AC'
	            )
	          )
	        ),
	        this.state.formError && _react2.default.createElement(
	          _styledComponents3.ErrorText,
	          null,
	          'Merci de remplir tous les champs'
	        ),
	        _react2.default.createElement(
	          _styledComponents3.Center,
	          null,
	          _react2.default.createElement(
	            _styledComponents3.Button3,
	            {
	              isNotValid: !this.isValid(),
	              onClick: this.submit
	            },
	            'Valider mon RDV'
	          )
	        ),
	        _react2.default.createElement(
	          _styledComponents3.SmallText,
	          null,
	          'En validant, vous acceptez les ',
	          _react2.default.createElement(
	            _styledComponents3.Link,
	            { href: '#' },
	            'conditions g\xE9n\xE9rales'
	          ),
	          ' de vente de tilli'
	        ),
	        _react2.default.createElement(
	          _styledComponents3.Note,
	          null,
	          '(*) Le mimimun de commande est de 20\u20AC. Si votre commande est inf\xE9rieure \xE0 ce montant, des frais de livraison\n            seront appliqu\xE9s pour atteindre 20\u20AC.'
	        ),
	        _react2.default.createElement(Img, { src: _mangopay2.default, alt: 'MangoPay notre partenaire de paiement' })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.hide) {
	        return _react2.default.createElement('div', null);
	      }
	      return this.renderForm();
	    }
	  }]);
	
	  return InfosBlock;
	}(_react2.default.Component);
	
	InfosBlock.propTypes = {
	  total: _react.PropTypes.number.isRequired,
	  totalPaid: _react.PropTypes.number.isRequired,
	  deliveryFee: _react.PropTypes.number.isRequired,
	  submitRegister: _react.PropTypes.func.isRequired,
	  submitLoggedInOrder: _react.PropTypes.func.isRequired,
	  checkPromoCode: _react.PropTypes.func.isRequired,
	  customer: _react.PropTypes.shape({
	    firstname: _react.PropTypes.string,
	    cards: _react.PropTypes.arrayOf(_react.PropTypes.shape({}))
	  }).isRequired,
	  errorPromoCode: _react.PropTypes.bool.isRequired,
	  rdv: _react.PropTypes.shape({}).isRequired,
	  promoCode: _react.PropTypes.shape({
	    value: _react.PropTypes.number,
	    unit: _react.PropTypes.string
	  }).isRequired,
	  hide: _react.PropTypes.bool.isRequired
	};
	
	exports.default = InfosBlock;

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['\n  font-weight: 200;\n  font-size: 26px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  color: ', ';\n  text-align: center;\n  @media (max-width: ', ') {\n    margin-bottom: 3px;\n    margin-top: 5px;\n    font-size: 20px;\n  }\n'], ['\n  font-weight: 200;\n  font-size: 26px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  color: ', ';\n  text-align: center;\n  @media (max-width: ', ') {\n    margin-bottom: 3px;\n    margin-top: 5px;\n    font-size: 20px;\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  text-align: center;\n'], ['\n  text-align: center;\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  text-decoration: underline;\n  cursor: pointer;\n'], ['\n  text-decoration: underline;\n  cursor: pointer;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(9);
	
	var _styledComponents = __webpack_require__(5);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _ProgressBar = __webpack_require__(17);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	var _InfosBlock = __webpack_require__(322);
	
	var _InfosBlock2 = _interopRequireDefault(_InfosBlock);
	
	var _styledComponents3 = __webpack_require__(3);
	
	var _logo = __webpack_require__(25);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _analytics = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var Message = _styledComponents2.default.h2(_templateObject, _styledComponents3.colors.navy, _styledComponents3.mobileThresholdPixels);
	
	var ErrorMessage = _styledComponents2.default.div(_templateObject2);
	
	var Button = _styledComponents2.default.p(_templateObject3);
	
	var renderRegisterSuccess = function renderRegisterSuccess() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      Message,
	      null,
	      'Votre inscription et votre commande ont bien \xE9t\xE9 prises en compte'
	    ),
	    _react2.default.createElement(
	      _styledComponents3.Center,
	      null,
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/' },
	        _react2.default.createElement(
	          _styledComponents3.Button3,
	          null,
	          "Revenir vers la page d'accueil"
	        )
	      )
	    )
	  );
	};
	
	var renderLoggedInSuccess = function renderLoggedInSuccess() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      Message,
	      null,
	      'Votre commande a bien \xE9t\xE9 prise en compte'
	    ),
	    _react2.default.createElement(
	      _styledComponents3.Center,
	      null,
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/' },
	        _react2.default.createElement(
	          _styledComponents3.Button3,
	          null,
	          "Revenir vers la page d'accueil"
	        )
	      )
	    )
	  );
	};
	
	var errorMessages = {
	  ValidationError: 'Cet email ou/et tél a déjà été utilisé',
	  CVV_FORMAT_ERROR: 'Le code CVV doit être sur 3 ou 4 chiffres',
	  CARD_NUMBER_FORMAT_ERROR: 'Numéro de carte erroné',
	  EXPIRY_DATE_FORMAT_ERROR: 'Date d‘expiration de la carte non reconnu',
	  PAST_EXPIRY_DATE_ERROR: 'Date d‘expiration de la carte dépassée',
	  INACTIVE_CARD: 'La carte bancaire n\u2018a pas pu \xEAtre utilis\xE9e par notre prestataire bancaire.\n    Merci d\u2018en utiliser une autre ou d\'ajouter \xE0 nouveau cette carte.',
	  PAYMENT_ERROR: 'Une erreur de paiement a eu lieu'
	};
	
	var renderError = function renderError(hideError, errorType) {
	  var message = errorMessages[errorType] || 'Une erreur a eu lieu';
	  return _react2.default.createElement(
	    ErrorMessage,
	    null,
	    _react2.default.createElement(
	      _styledComponents3.P,
	      null,
	      message
	    ),
	    _react2.default.createElement(
	      Button,
	      { onClick: hideError },
	      'Cliquer pour r\xE9essayer'
	    )
	  );
	};
	
	var Step6 = function Step6(_ref) {
	  var submitRegister = _ref.submitRegister,
	      isLoading = _ref.isLoading,
	      successRegisterOrder = _ref.successRegisterOrder,
	      error = _ref.error,
	      total = _ref.total,
	      customer = _ref.customer,
	      submitLoggedInOrder = _ref.submitLoggedInOrder,
	      successLoggedInOrder = _ref.successLoggedInOrder,
	      rdv = _ref.rdv,
	      checkPromoCode = _ref.checkPromoCode,
	      isPromoCodeLoading = _ref.isPromoCodeLoading,
	      errorPromoCode = _ref.errorPromoCode,
	      promoCode = _ref.promoCode,
	      totalPaid = _ref.totalPaid,
	      deliveryFee = _ref.deliveryFee,
	      hideError = _ref.hideError,
	      errorType = _ref.errorType;
	  return _react2.default.createElement(
	    _styledComponents3.Wrapper,
	    null,
	    _react2.default.createElement(
	      _styledComponents3.Block,
	      { id: 'infos' },
	      _react2.default.createElement(
	        _styledComponents3.Header2,
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          {
	            to: '/', style: { flex: 1, textAlign: 'center' },
	            onClick: function onClick() {
	              return (0, _analytics.trackEvent)('click', 'home_step6');
	            }
	          },
	          _react2.default.createElement(_styledComponents3.Logo, { src: _logo2.default })
	        ),
	        _react2.default.createElement(_ProgressBar2.default, { step: 4 }),
	        !successRegisterOrder && _react2.default.createElement(
	          _styledComponents3.Title2,
	          null,
	          'Mes informations'
	        )
	      ),
	      isLoading && _react2.default.createElement(
	        _styledComponents3.Center,
	        null,
	        _react2.default.createElement(
	          _styledComponents3.P,
	          null,
	          'Chargement'
	        )
	      ),
	      successLoggedInOrder && renderLoggedInSuccess(),
	      successRegisterOrder && renderRegisterSuccess(),
	      error && renderError(hideError, errorType),
	      _react2.default.createElement(_InfosBlock2.default, {
	        checkPromoCode: checkPromoCode,
	        customer: customer,
	        errorPromoCode: errorPromoCode,
	        isPromoCodeLoading: isPromoCodeLoading,
	        promoCode: promoCode,
	        rdv: rdv,
	        submitLoggedInOrder: submitLoggedInOrder,
	        submitRegister: submitRegister,
	        total: total,
	        totalPaid: totalPaid,
	        deliveryFee: deliveryFee,
	        hide: successRegisterOrder || successLoggedInOrder || isLoading || error
	      })
	    )
	  );
	};
	
	Step6.propTypes = {
	  checkPromoCode: _react.PropTypes.func.isRequired,
	  customer: _react.PropTypes.shape({}),
	  error: _react.PropTypes.bool,
	  errorType: _react.PropTypes.string,
	  errorPromoCode: _react.PropTypes.bool,
	  isLoading: _react.PropTypes.bool,
	  isPromoCodeLoading: _react.PropTypes.bool,
	  hideError: _react.PropTypes.func.isRequired,
	  promoCode: _react.PropTypes.shape({}),
	  rdv: _react.PropTypes.shape({}).isRequired,
	  submitLoggedInOrder: _react.PropTypes.func.isRequired,
	  submitRegister: _react.PropTypes.func.isRequired,
	  successLoggedInOrder: _react.PropTypes.bool,
	  successRegisterOrder: _react.PropTypes.bool,
	  total: _react.PropTypes.number.isRequired,
	  totalPaid: _react.PropTypes.number.isRequired,
	  deliveryFee: _react.PropTypes.number.isRequired
	};
	
	Step6.defaultProps = {
	  isLoading: false,
	  successRegisterOrder: false,
	  successLoggedInOrder: false,
	  error: false,
	  errorType: null,
	  errorPromoCode: false,
	  isPromoCodeLoading: false,
	  customer: {},
	  promoCode: {}
	};
	
	exports.default = Step6;

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n  font-weight: 300;\n'], ['\n  text-align: center;\n  font-weight: 300;\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 18px;\n  margin: 0px;\n'], ['\n  font-size: 18px;\n  margin: 0px;\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  font-weight: normal;\n'], ['\n  font-weight: normal;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(5);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _styledComponents3 = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var P = _styledComponents2.default.p(_templateObject);
	
	var PromoCodeMessage = _styledComponents2.default.p(_templateObject2);
	
	var B = _styledComponents2.default.span(_templateObject3);
	
	var PromoCodeField = function (_React$Component) {
	  _inherits(PromoCodeField, _React$Component);
	
	  function PromoCodeField() {
	    _classCallCheck(this, PromoCodeField);
	
	    var _this = _possibleConstructorReturn(this, (PromoCodeField.__proto__ || Object.getPrototypeOf(PromoCodeField)).call(this));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(PromoCodeField, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          promoCode = _props.promoCode,
	          errorPromoCode = _props.errorPromoCode,
	          checkPromoCode = _props.checkPromoCode;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _styledComponents3.Title4Top,
	          null,
	          'Carte cadeau/code promo'
	        ),
	        _react2.default.createElement(
	          _styledComponents3.Center,
	          null,
	          _react2.default.createElement(_styledComponents3.Input, {
	            type: 'text', placeholder: 'code', value: this.state.promoCode,
	            onChange: function onChange(e) {
	              return _this2.setState({ promoCode: e.target.value });
	            }
	          }),
	          _react2.default.createElement(
	            _styledComponents3.Button3,
	            {
	              small: true, noMargin: true, onClick: function onClick() {
	                return checkPromoCode(_this2.state.promoCode);
	              },
	              isNotValid: !this.state.promoCode
	            },
	            'Appliquer'
	          )
	        ),
	        promoCode && promoCode.code && _react2.default.createElement(
	          _styledComponents3.Center,
	          null,
	          promoCode.value ? _react2.default.createElement(
	            P,
	            null,
	            _react2.default.createElement(
	              PromoCodeMessage,
	              null,
	              promoCode.name,
	              ' vous offre ',
	              _react2.default.createElement(
	                B,
	                null,
	                promoCode.value,
	                promoCode.unit === 'EUROS' ? '€' : '%'
	              ),
	              ' sur cette commande.'
	            ),
	            promoCode.brand && promoCode.brand.name && '(code valide uniquement sur les retouches des v\xEAtements de la marque ' + promoCode.brand.name + ' et\n                  non applicable sur les \xE9ventuels frais de livraison)'
	          ) : 'Le code ' + promoCode.name + ' a bien \xE9t\xE9 pris en compte pour cette commande.'
	        ),
	        errorPromoCode && _react2.default.createElement(
	          _styledComponents3.ErrorText,
	          null,
	          'Code non reconnu'
	        )
	      );
	    }
	  }]);
	
	  return PromoCodeField;
	}(_react2.default.Component);
	
	PromoCodeField.propTypes = {
	  promoCode: _react.PropTypes.shape({}),
	  checkPromoCode: _react.PropTypes.func.isRequired,
	  errorPromoCode: _react.PropTypes.bool
	};
	
	PromoCodeField.defaultProps = {
	  promoCode: null,
	  errorPromoCode: false
	};
	
	exports.default = PromoCodeField;

/***/ },

/***/ 338:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  deliveryFee: 20
	};

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTotalWithPromoCode = getTotalWithPromoCode;
	exports.getDeliveryFee = getDeliveryFee;
	exports.getTotalPaid = getTotalPaid;
	
	var _config = __webpack_require__(338);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var deliveryFee = _config2.default.deliveryFee;
	function getTotalWithPromoCode(total, promoCode) {
	  if (promoCode) {
	    if (promoCode.unit === 'EUROS') {
	      return Math.max(total - promoCode.value, 0);
	    }
	    return Math.max(total * (100 - promoCode.value) / 100, 0);
	  }
	  return total;
	}
	
	function getDeliveryFee(total) {
	  return Math.max(0, deliveryFee - total);
	}
	
	function getTotalPaid(total, promoCode) {
	  return getTotalWithPromoCode(total, promoCode) + getDeliveryFee(total);
	}

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(28);
	
	var _Step = __webpack_require__(335);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	var _api = __webpack_require__(43);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _orderReducer = __webpack_require__(63);
	
	var _pricing = __webpack_require__(42);
	
	var _mangopay = __webpack_require__(109);
	
	var _analytics = __webpack_require__(10);
	
	var _order = __webpack_require__(339);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Step6Container = function (_Component) {
	  _inherits(Step6Container, _Component);
	
	  function Step6Container() {
	    _classCallCheck(this, Step6Container);
	
	    var _this = _possibleConstructorReturn(this, (Step6Container.__proto__ || Object.getPrototypeOf(Step6Container)).call(this));
	
	    _this.state = {};
	    _this.submitRegister = _this.submitRegister.bind(_this);
	    _this.submitLoggedInOrder = _this.submitLoggedInOrder.bind(_this);
	    _this.checkPromoCode = _this.checkPromoCode.bind(_this);
	    _this.hideError = _this.hideError.bind(_this);
	    return _this;
	  }
	
	  _createClass(Step6Container, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.scrollTo(0, 0);
	      if (window.location.hostname !== 'localhost') {
	        window.onbeforeunload = function () {
	          return true;
	        };
	      }
	    }
	  }, {
	    key: 'hideError',
	    value: function hideError() {
	      this.setState({ error: false });
	    }
	  }, {
	    key: 'createRequest',
	    value: function createRequest(customer) {
	      var order = {
	        rdv1: { begin: this.props.rdv.toDate(), end: this.props.rdv.add(30, 'minutes').toDate() },
	        fabrics: this.props.fabrics,
	        clothes: this.props.clothes.map(function (cloth) {
	          return Object.assign({}, cloth, {
	            items: Object.keys(cloth.alterations).map(function (alterationId) {
	              return {
	                id: alterationId,
	                quantity: cloth.alterations[alterationId],
	                price: _pricing.pricingInverse[alterationId].price
	              };
	            })
	          });
	        }),
	        promoCode: this.state.promoCode && this.state.promoCode.code
	      };
	      return { customer: customer, order: order };
	    }
	  }, {
	    key: 'submitCard',
	    value: function submitCard(cardData, order, customer) {
	      var _this2 = this;
	
	      if (cardData.cardId) {
	        return (0, _api2.default)('public/submitCard', 'post', { card: { CardId: cardData.cardId }, orderId: order._id }) // eslint-disable-line no-underscore-dangle
	        .then(function (res) {
	          _this2.setState({ redirecting: true });
	          if (res.redirectUrl) {
	            window.onbeforeunload = null;
	            window.location = res.redirectUrl;
	          }
	        });
	      }
	      return (0, _mangopay.registerCard)(cardData, customer._id) // eslint-disable-line no-underscore-dangle
	      .then(function (card) {
	        return (0, _api2.default)('public/submitCard', 'post', { card: card, orderId: order._id });
	      }) // eslint-disable-line no-underscore-dangle
	      .then(function (res) {
	        _this2.setState({ redirecting: true });
	        if (res.redirectUrl) {
	          window.onbeforeunload = null;
	          window.location = res.redirectUrl;
	        } else {
	          Raven.captureException('no redirectUrl'); // eslint-disable-line
	        }
	      }).catch(function (response) {
	        _this2.setState({ error: true, isLoading: false, errorType: response.error });
	        (0, _analytics.trackEvent)('erreur', response.error);
	      });
	    }
	  }, {
	    key: 'submitRegister',
	    value: function submitRegister(customerReq, cardData) {
	      var _this3 = this;
	
	      this.setState({ isLoading: true });
	      (0, _api2.default)('registerAndOrder', 'post', this.createRequest(customerReq)).then(function (_ref) {
	        var order = _ref.order,
	            customer = _ref.customer;
	
	        _this3.props.dispatch({ type: 'CUSTOMER.SET_CUSTOMER', customer: customer });
	        _this3.submitCard(cardData, order, customer);
	      }).catch(function (response) {
	        _this3.setState({ error: true, isLoading: false, errorType: response.error });
	        (0, _analytics.trackEvent)('erreur', 'echec-soumission-commande-non-connecte');
	      });
	    }
	  }, {
	    key: 'checkPromoCode',
	    value: function checkPromoCode(promoCode) {
	      var _this4 = this;
	
	      this.setState({ isPromoCodeLoading: true });
	      (0, _api2.default)('public/checkPromoCode/' + promoCode).then(function (res) {
	        (0, _analytics.trackEvent)('ajout-code-promo', promoCode);
	        _this4.setState({ promoCode: res.promoCode, errorPromoCode: false, isPromoCodeLoading: false });
	      }).catch(function () {
	        (0, _analytics.trackEvent)('ajout-code-promo-echec', promoCode);
	        _this4.setState({ promoCode: null, errorPromoCode: true, isPromoCodeLoading: false });
	      });
	    }
	  }, {
	    key: 'submitLoggedInOrder',
	    value: function submitLoggedInOrder(customerReq, cardData) {
	      var _this5 = this;
	
	      this.setState({ isLoading: true });
	      (0, _api2.default)('editCustomerAndOrder', 'post', this.createRequest(customerReq)).then(function (_ref2) {
	        var order = _ref2.order,
	            customer = _ref2.customer;
	        return _this5.submitCard(cardData, order, customer);
	      }).catch(function (response) {
	        (0, _analytics.trackEvent)('erreur', 'echec-soumission-commande-connecte');
	        _this5.setState({ error: true, isLoading: false, errorType: response.error });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Step2.default, {
	        checkPromoCode: this.checkPromoCode,
	        customer: this.props.customer,
	        error: this.state.error,
	        errorType: this.state.errorType,
	        errorPromoCode: this.state.errorPromoCode,
	        isLoading: this.state.isLoading,
	        isLoggued: !!this.props.customer,
	        isPromoCodeLoading: this.state.isPromoCodeLoading,
	        hideError: this.hideError,
	        promoCode: this.state.promoCode,
	        rdv: this.props.rdv,
	        submitLoggedInOrder: this.submitLoggedInOrder,
	        submitRegister: this.submitRegister,
	        successLoggedInOrder: this.state.successLoggedInOrder,
	        successRegisterOrder: this.state.successRegisterOrder,
	        total: this.props.total,
	        totalPaid: (0, _order.getTotalPaid)(this.props.total, this.state.promoCode),
	        deliveryFee: (0, _order.getDeliveryFee)(this.props.total)
	      });
	    }
	  }]);
	
	  return Step6Container;
	}(_react.Component);
	
	Step6Container.propTypes = {
	  rdv: _react.PropTypes.shape({ add: _react.PropTypes.func, toDate: _react.PropTypes.func }).isRequired,
	  clothes: _react.PropTypes.arrayOf(_react.PropTypes.shape({})).isRequired,
	  fabrics: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
	  total: _react.PropTypes.number.isRequired,
	  customer: _react.PropTypes.shape({}),
	  dispatch: _react.PropTypes.func.isRequired
	};
	
	Step6Container.defaultProps = {
	  customer: {}
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    rdv: state.order.rdv,
	    clothes: state.order.clothes,
	    fabrics: state.order.fabrics,
	    total: (0, _orderReducer.getTotal)(state),
	    customer: state.customer.customer
	  };
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Step6Container);

/***/ },

/***/ 360:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = checkError;
	var validZipcodePrefix = '75';
	var validZipcodes = ['92200', '92300', '92110', '92100', '92130', '93100'];
	
	function checkError(zipcode) {
	  if (typeof zipcode !== 'string' || zipcode.length !== 5) {
	    return 'Merci d\'entrer un code postal à 5 chiffres';
	  }
	  if (!zipcode.startsWith(validZipcodePrefix) && !validZipcodes.includes(zipcode)) {
	    return 'Votre ville n\'est pas encore couverte par notre service. Voici la liste des villes couvertes pour le moment:\n      Paris, Neuilly, Levallois-Perret, Clichy, Issy-L\xE8s-Moulineaux, Montrueil et Boulogne-Billancourt.';
	  }
	  return '';
	}

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var CardReact, ClassNames, Payment, React, ccDots, cvcDots, dot, expiryDots;
	
	  React = __webpack_require__(1);
	
	  Payment = __webpack_require__(238);
	
	  ClassNames = __webpack_require__(29);
	
	  dot = String.fromCharCode('8226');
	
	  ccDots = dot + dot + dot + dot;
	
	  cvcDots = dot + dot + dot;
	
	  expiryDots = dot + dot + '/' + dot + dot;
	
	  CardReact = React.createClass({
	    displayName: "CardReact",
	    getDefaultProps: function() {
	      return {
	        messages: {
	          validDate: 'valid\nthru',
	          monthYear: 'month/year'
	        },
	        baseWidth: 350,
	        defaultValues: {
	          number: ccDots + " " + ccDots + " " + ccDots + " " + ccDots,
	          cvc: cvcDots,
	          expiry: expiryDots,
	          name: 'Full Name'
	        }
	      };
	    },
	    componentWillMount: function() {
	      return this.cardBrowserClass = this._addBrowserClass();
	    },
	    _addBrowserClass: function() {
	      var ua;
	      if (typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent : void 0) {
	        ua = navigator.userAgent.toLowerCase();
	        if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
	          return 'jp-card-safari';
	        }
	      }
	      if (/MSIE 10\./i.test(navigator.userAgent)) {
	        return 'jp-card-ie-10';
	      }
	      if (/rv:11.0/i.test(navigator.userAgent)) {
	        return 'jp-card-ie-11';
	      } else {
	        return '';
	      }
	    },
	    _getCardType: function(cardNumber) {
	      this.cardType = Payment.fns.cardType(cardNumber);
	      if (this.cardType && this.cardType !== 'unknown') {
	        return "jp-card-" + this.cardType + " jp-card-identified";
	      }
	    },
	    _isFocusedInput: function(inputName) {
	      var currentInputValue;
	      currentInputValue = this.props.formInputsNames[inputName];
	      return (this.props.focusedInput === currentInputValue) || this.props.inputsValues[currentInputValue];
	    },
	    _getInputValidationState: function(inputName) {
	      var validationState;
	      validationState = this.props.inputsValidationClass[this.props.formInputsNames[inputName]];
	      if (typeof validationState === 'undefined') {
	        return '';
	      } else {
	        return validationState;
	      }
	    },
	    render: function() {
	      var containerStyle, expiryValue, scaleWidth;
	      containerStyle = {};
	      if (this.props.width) {
	        scaleWidth = "scale(" + (this.props.width / this.props.baseWidth) + ")";
	        containerStyle = {
	          WebkitTransform: scaleWidth,
	          MozTransform: scaleWidth,
	          msTransform: scaleWidth,
	          OTransform: scaleWidth,
	          transform: scaleWidth
	        };
	      }
	      expiryValue = this.props.inputsValues[this.props.formInputsNames["expiry"]];
	      if (expiryValue) {
	        expiryValue = expiryValue.replace(/\s+/g, '');
	      } else {
	        expiryValue = this.props.defaultValues.expiry;
	      }
	      return React.createElement("div", {
	        "className": "jp-card-container",
	        "style": containerStyle
	      }, React.createElement("div", {
	        "className": ClassNames("jp-card", this.cardBrowserClass, this._getCardType(this.props.inputsValues[this.props.formInputsNames["number"]]), {
	          'jp-card-flipped': this.props.cardFlipped
	        })
	      }, React.createElement("div", {
	        "className": "jp-card-front"
	      }, React.createElement("div", {
	        "className": "jp-card-logo jp-card-visa"
	      }, "visa"), React.createElement("div", {
	        "className": "jp-card-logo jp-card-mastercard"
	      }, "MasterCard"), React.createElement("div", {
	        "className": "jp-card-logo jp-card-maestro"
	      }, "Maestro"), React.createElement("div", {
	        "className": "jp-card-logo jp-card-amex"
	      }), React.createElement("div", {
	        "className": "jp-card-logo jp-card-discover"
	      }, "discover"), React.createElement("div", {
	        "className": "jp-card-logo jp-card-dankort"
	      }, React.createElement("div", {
	        "className": "dk"
	      }, React.createElement("div", {
	        "className": "d"
	      }), React.createElement("div", {
	        "className": "k"
	      }))), React.createElement("div", {
	        "className": "jp-card-lower"
	      }, React.createElement("div", {
	        "className": "jp-card-shiny"
	      }), React.createElement("div", {
	        "className": ClassNames("jp-card-cvc", "jp-card-display", {
	          "jp-card-focused": this._isFocusedInput("cvc")
	        }, this._getInputValidationState("cvc"))
	      }, this.props.inputsValues[this.props.formInputsNames["cvc"]] || this.props.defaultValues.cvc), React.createElement("div", {
	        "className": ClassNames("jp-card-number", "jp-card-display", {
	          "jp-card-focused": this._isFocusedInput("number")
	        }, this._getInputValidationState("number"))
	      }, this.props.inputsValues[this.props.formInputsNames["number"]] || this.props.defaultValues.number), React.createElement("div", {
	        "className": ClassNames("jp-card-name", "jp-card-display", {
	          "jp-card-focused": this._isFocusedInput("name")
	        }, this._getInputValidationState("name"))
	      }, this.props.inputsValues[this.props.formInputsNames["name"]] || this.props.defaultValues.name), React.createElement("div", {
	        "className": ClassNames("jp-card-expiry", "jp-card-display", {
	          "jp-card-focused": this._isFocusedInput("expiry")
	        }, this._getInputValidationState("expiry")),
	        "data-before": this.props.messages.monthYear,
	        "data-after": this.props.messages.validDate
	      }, expiryValue))), React.createElement("div", {
	        "className": "jp-card-back"
	      }, React.createElement("div", {
	        "className": "jp-card-bar"
	      }), React.createElement("div", {
	        "className": ClassNames("jp-card-cvc", "jp-card-display", {
	          "jp-card-focused": this._isFocusedInput("cvc")
	        }, this._getInputValidationState("cvc"))
	      }, this.props.inputsValues[this.props.formInputsNames["cvc"]] || this.props.defaultValues.cvc), React.createElement("div", {
	        "className": "jp-card-shiny"
	      }))));
	    }
	  });
	
	  module.exports = CardReact;
	
	}).call(this);


/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var CardReactFormContainer, Payment, React, ReactCard, ReactDOM;
	
	  React = __webpack_require__(1);
	
	  ReactDOM = __webpack_require__(44);
	
	  Payment = __webpack_require__(238);
	
	  ReactCard = __webpack_require__(363);
	
	  CardReactFormContainer = React.createClass({
	    displayName: 'CardReactFormContainer',
	    getDefaultProps: function() {
	      return {
	        formatting: true,
	        formInputsNames: {
	          number: 'number',
	          expiry: 'expiry',
	          cvc: 'cvc',
	          name: 'name'
	        },
	        classes: {
	          valid: 'jp-card-valid',
	          invalid: 'jp-card-invalid'
	        },
	        initialValues: {},
	        fieldTypes: ["number", "cvc", "expiry", "name"]
	      };
	    },
	    getInitialState: function() {
	      return {
	        inputsValidationClass: {}
	      };
	    },
	    componentWillMount: function() {
	      var i, len, ref, results, type;
	      this.inputsValues = {};
	      this.inputsRefs = {};
	      this.cardFlipped = false;
	      ref = this.props.fieldTypes;
	      results = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        type = ref[i];
	        results.push(this.inputsValues[this.props.formInputsNames[type]] = this.props.initialValues[type]);
	      }
	      return results;
	    },
	    componentDidMount: function() {
	      if (!this.props.container) {
	        console.log("Please provide a container react-card");
	        return;
	      }
	      this.cardContainer = document.getElementById(this.props.container);
	      if (!this.cardContainer) {
	        console.log("couldn't find react-card container by its id. please make sure the correct id is provided");
	        return;
	      }
	      if (this.props.formatting) {
	        this.formatInputs();
	      }
	      return this.renderCardComponent();
	    },
	    formatInputs: function() {
	      var inputsNames;
	      inputsNames = this.props.formInputsNames;
	      Payment.formatCardNumber(ReactDOM.findDOMNode(this.refs[this.inputsRefs[inputsNames["number"]]]));
	      Payment.formatCardCVC(ReactDOM.findDOMNode(this.refs[this.inputsRefs[inputsNames["cvc"]]]));
	      return Payment.formatCardExpiry(ReactDOM.findDOMNode(this.refs[this.inputsRefs[inputsNames["expiry"]]]));
	    },
	    renderCardComponent: function() {
	      if (this.cardContainer) {
	        return ReactDOM.render(React.createElement(ReactCard, Object.assign({}, this.props, {
	          "cardFlipped": this.cardFlipped,
	          "focusedInput": this.focusedInput,
	          "inputsValues": this.inputsValues,
	          "inputsValidationClass": this.state.inputsValidationClass
	        })), this.cardContainer);
	      }
	    },
	    traverseChildrenAndRegisterInputs: function(children) {
	      if (typeof children !== 'object' || children === null) {
	        return children;
	      }
	      return React.Children.map(children, (function(_this) {
	        return function(child) {
	          var inputsValidationClass, newClassName;
	          if (typeof child !== 'object' || child === null) {
	            return child;
	          }
	          if (child.props && child.props.name) {
	            newClassName = child.props.className;
	            inputsValidationClass = _this.state.inputsValidationClass[child.props.name];
	            if (child.ref) {
	              _this.inputsRefs[child.props.name] = child.ref;
	            } else {
	              _this.inputsRefs[child.props.name] = "react-card-input-" + child.props.name;
	            }
	            if (newClassName && inputsValidationClass) {
	              newClassName = newClassName + " " + inputsValidationClass;
	            } else if (inputsValidationClass) {
	              newClassName = inputsValidationClass;
	            }
	            return React.cloneElement(child, {
	              onKeyUp: _this.inputOnKeyUp,
	              onFocus: _this.inputOnFocus,
	              onBlur: _this.inputOnBlur,
	              ref: _this.inputsRefs[child.props.name],
	              defaultValue: _this.inputsValues[child.props.name],
	              className: newClassName
	            }, child.props && child.props.children);
	          } else {
	            return React.cloneElement(child, {}, _this.traverseChildrenAndRegisterInputs(child.props && child.props.children));
	          }
	        };
	      })(this));
	    },
	    inputOnKeyUp: function(event) {
	      this.inputsValues[event.target.name] = event.target.value;
	      this.validateInput(event.target.name, event.target.value);
	      return this.renderCardComponent();
	    },
	    inputOnFocus: function(event) {
	      this.focusedInput = event.target.name;
	      if (this.focusedInput === this.props.formInputsNames['cvc']) {
	        this.cardFlipped = true;
	      }
	      return this.renderCardComponent();
	    },
	    inputOnBlur: function(event) {
	      this.focusedInput = '';
	      this.cardFlipped = false;
	      return this.renderCardComponent();
	    },
	    validateInput: function(inputName, inputValue) {
	      var currentInputsValidationClass, inputsNames, objVal;
	      inputsNames = this.props.formInputsNames;
	      currentInputsValidationClass = this.state.inputsValidationClass;
	      switch (inputName) {
	        case inputsNames["expiry"]:
	          objVal = Payment.fns.cardExpiryVal(inputValue);
	          currentInputsValidationClass[inputsNames["expiry"]] = this.getInputValidationClass(Payment.fns.validateCardExpiry(objVal.month, objVal.year));
	          break;
	        case inputsNames["cvc"]:
	          currentInputsValidationClass[inputsNames["cvc"]] = this.getInputValidationClass(Payment.fns.validateCardCVC(inputValue, this.cardType));
	          break;
	        case inputsNames["number"]:
	          currentInputsValidationClass[inputsNames["number"]] = this.getInputValidationClass(Payment.fns.validateCardNumber(inputValue));
	          break;
	        case inputsNames["name"]:
	          currentInputsValidationClass[inputsNames["name"]] = this.getInputValidationClass(inputValue !== "");
	      }
	      return this.setState({
	        inputsValidationClass: currentInputsValidationClass
	      });
	    },
	    getInputValidationClass: function(inputValid) {
	      if (inputValid) {
	        return this.props.classes.valid;
	      } else {
	        return this.props.classes.invalid;
	      }
	    },
	    render: function() {
	      return React.createElement("div", null, this.traverseChildrenAndRegisterInputs(this.props.children));
	    }
	  });
	
	  module.exports = CardReactFormContainer;
	
	}).call(this);


/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	const Reach = __webpack_require__(434);
	const Merge = __webpack_require__(417);
	
	let _defaults = {
	  cardTypes: {
	    VISA: {
	      cardType: 'VISA',
	      cardPattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
	      partialPattern: /^4/,
	      cvvPattern: /^\d{3}$/
	    },
	    MASTERCARD: {
	      cardType: 'MASTERCARD',
	      cardPattern: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}$/,
	      partialPattern: /^(?:5[1-5]|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)/,
	      cvvPattern: /^\d{3}$/
	    },
	    AMERICANEXPRESS: {
	      cardType: 'AMERICANEXPRESS',
	      cardPattern: /^3[47][0-9]{13}$/,
	      partialPattern: /^3[47]/,
	      cvvPattern: /^\d{4}$/
	    },
	    DINERSCLUB: {
	      cardType: 'DINERSCLUB',
	      cardPattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
	      partialPattern: /^3(0[0-5]|[68])/,
	      cvvPattern: /^\d{3}$/
	    },
	    DISCOVER: {
	      cardType: 'DISCOVER',
	      cardPattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
	      partialPattern: /^6(011|5[0-9])/,
	      cvvPattern: /^\d{3}$/
	    },
	    JCB: {
	      cardType: 'JCB',
	      cardPattern: /^(?:2131|1800|35\d{3})\d{11}$/,
	      partialPattern: /^(2131|1800|35)/,
	      cvvPattern: /^\d{3}$/
	    }
	  },
	  expiryMonths: {
	    min: 1,
	    max: 12
	  },
	  expiryYears: {
	    min: 1900,
	    max: 2200
	  },
	  schema: {
	    cardType: 'cardType',
	    number: 'number',
	    expiryMonth: 'expiryMonth',
	    expiryYear: 'expiryYear',
	    cvv: 'cvv'
	  }
	};
	
	// Setup Aliases
	_setupCardTypeAliases('VISA', ['vc', 'VC', 'visa']);
	_setupCardTypeAliases('MASTERCARD', ['mc', 'MC', 'mastercard', 'master card', 'MASTER CARD']);
	_setupCardTypeAliases('AMERICANEXPRESS', ['ae', 'AE', 'ax', 'AX', 'amex', 'AMEX', 'american express', 'AMERICAN EXPRESS']);
	_setupCardTypeAliases('DINERSCLUB', ['dinersclub']);
	_setupCardTypeAliases('DISCOVER', ['dc', 'DC', 'discover']);
	_setupCardTypeAliases('JCB', ['jcb']);
	
	// Store original defaults. This must happen after aliases are setup
	const _originalDefaults = Merge({}, _defaults);
	
	function validate (card, options) {
	  card = card || {};
	
	  const settings = Merge({}, _defaults, options);
	  const schema = settings.schema;
	  const cardType = Reach(card, schema.cardType);
	  const number = sanitizeNumberString(Reach(card, schema.number));
	  const expiryMonth = Reach(card, schema.expiryMonth);
	  const expiryYear = Reach(card, schema.expiryYear);
	  const cvv = sanitizeNumberString(Reach(card, schema.cvv));
	  const customValidationFn = settings.customValidation;
	  let customValidation;
	
	  // Optional custom validation
	  if (typeof customValidationFn === 'function') {
	    customValidation = customValidationFn(card, settings);
	  }
	
	  return {
	    card,
	    validCardNumber: isValidCardNumber(number, cardType, settings.cardTypes),
	    validExpiryMonth: isValidExpiryMonth(expiryMonth, settings.expiryMonths),
	    validExpiryYear: isValidExpiryYear(expiryYear, settings.expiryYears),
	    validCvv: doesCvvMatchType(cvv, cardType, settings.cardTypes),
	    isExpired: isExpired(expiryMonth, expiryYear),
	    customValidation
	  };
	}
	
	function determineCardType (number, options) {
	  const settings = Merge({}, _defaults, options);
	  const cardTypes = settings.cardTypes;
	  const keys = Object.keys(cardTypes);
	
	  number = sanitizeNumberString(number);
	
	  for (let i = 0; i < keys.length; ++i) {
	    const key = keys[i];
	    const type = cardTypes[key];
	
	    if (type.cardPattern.test(number) ||
	        (settings.allowPartial === true && type.partialPattern.test(number))) {
	      return type.cardType;
	    }
	  }
	
	  return null;
	}
	
	function isValidCardNumber (number, type, options) {
	  return doesNumberMatchType(number, type, options) && luhn(number);
	}
	
	function isValidExpiryMonth (month, options) {
	  const settings = Merge({}, _defaults.expiryMonths, options);
	
	  if (typeof month === 'string' && month.length > 2) {
	    return false;
	  }
	
	  month = ~~month;
	  return month >= settings.min && month <= settings.max;
	}
	
	function isValidExpiryYear (year, options) {
	  const settings = Merge({}, _defaults.expiryYears, options);
	
	  if (typeof year === 'string' && year.length !== 4) {
	    return false;
	  }
	
	  year = ~~year;
	  return year >= settings.min && year <= settings.max;
	}
	
	function doesNumberMatchType (number, type, options) {
	  const settings = Merge({}, _defaults.cardTypes, options);
	  const patterns = settings[type];
	
	  if (!patterns) {
	    return false;
	  }
	
	  return patterns.cardPattern.test(number);
	}
	
	function doesCvvMatchType (number, type, options) {
	  const settings = Merge({}, _defaults.cardTypes, options);
	  const patterns = settings[type];
	
	  if (!patterns) {
	    return false;
	  }
	
	  return patterns.cvvPattern.test(number);
	}
	
	function isExpired (month, year) {
	  month = ~~month;
	  year = ~~year;
	
	  // Cards are good until the end of the month
	  // http://stackoverflow.com/questions/54037/credit-card-expiration-dates-inclusive-or-exclusive
	  const expiration = new Date(year, month);
	
	  return Date.now() >= expiration;
	}
	
	function luhn (number) {
	  // Source - https://gist.github.com/DiegoSalazar/4075533
	
	  if (/[^\d]+/.test(number) || typeof number !== 'string' || !number) {
	    return false;
	  }
	
	  let nCheck = 0;
	  let bEven = false;
	  let nDigit;
	
	  for (let i = number.length - 1; i >= 0; --i) {
	    nDigit = ~~number.charAt(i);
	
	    if (bEven) {
	      if ((nDigit *= 2) > 9) {
	        nDigit -= 9;
	      }
	    }
	
	    nCheck += nDigit;
	    bEven = !bEven;
	  }
	
	  return (nCheck % 10) === 0;
	}
	
	function sanitizeNumberString (number) {
	  if (typeof number !== 'string') {
	    return '';
	  }
	
	  return number.replace(/[^\d]/g, '');
	}
	
	function defaults (options, overwrite) {
	  options = options || {};
	
	  if (overwrite === true) {
	    _defaults = Merge({}, options);
	  } else {
	    _defaults = Merge({}, _defaults, options);
	  }
	
	  return _defaults;
	}
	
	function reset () {
	  _defaults = Merge({}, _originalDefaults);
	  return _defaults;
	}
	
	function _setupCardTypeAliases (type, aliases) {
	  for (let i = 0; i < aliases.length; ++i) {
	    _defaults.cardTypes[aliases[i]] = _defaults.cardTypes[type];
	  }
	}
	
	module.exports = {
	  validate,
	  determineCardType,
	  isValidCardNumber,
	  isValidExpiryMonth,
	  isValidExpiryYear,
	  doesNumberMatchType,
	  doesCvvMatchType,
	  isExpired,
	  luhn,
	  sanitizeNumberString,
	  defaults,
	  reset
	};


/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}
	
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = baseKeysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;
	
	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);
	
	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;
	
	  var isCommon = newValue === undefined;
	
	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}
	
	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case dataViewTag:
	      return cloneDataView(object, isDeep);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});
	
	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = merge;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(106)(module)))

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	!function(a,b){ true?module.exports=b():"function"==typeof define&&define.amd?define(b):a.mangoPay=b()}(this,function(){"use strict";var a={cardRegistration:{baseURL:"https://api.sandbox.mangopay.com",clientId:"",init:function(a){this._cardRegisterData=a},registerCard:function(b,c,d){if(!a.browser.corsSupport())return void d({ResultCode:"009999",ResultMessage:"Browser does not support making cross-origin Ajax calls"});var e=a.cardRegistration._validateCardData(b);return e!==!0?void d(e):void a.cardRegistration._tokenizeCard(b,a.cardRegistration._finishRegistration,c,d)},_validateCardData:function(b){var c=a._validation._cardNumberValidator._validate(b.cardNumber);if(c!==!0)return c;var d=a._validation._expirationDateValidator._validate(b.cardExpirationDate,new Date);if(d!==!0)return d;var e=a._validation._cvvValidator._validate(b.cardCvx,b.cardType);return e===!0||e},_tokenizeCard:function(b,c,d,e){a._networking._ajax({type:"post",url:this._cardRegisterData.cardRegistrationURL,crossDomain:!0,data:{data:this._cardRegisterData.preregistrationData,accessKeyRef:this._cardRegisterData.accessKey,cardNumber:b.cardNumber,cardExpirationDate:b.cardExpirationDate,cardCvx:b.cardCvx},success:function(b,f){var g="";return null!==b&&0===b.indexOf("errorCode=")?void e({xmlhttp:f,ResultCode:b.replace("errorCode=",""),ResultMessage:"Token processing error"}):null===b?void e({xmlhttp:f,ResultCode:"001599",ResultMessage:"Token processing error"}):(g={Id:a.cardRegistration._cardRegisterData.Id,RegistrationData:b},void c(g,d,e))},error:function(a,b){return b?e(b):"0"==a.status?void e({xmlhttp:a,ResultCode:"001596",ResultMessage:"An HTTP request was blocked by the User's computer (probably due to an antivirus)"}):void e({xmlhttp:a,ResultCode:"001599",ResultMessage:"Token processing error"})}})},_finishRegistration:function(b,c,d){a._networking._ajax({type:"post",crossDomain:!0,url:a.cardRegistration.baseURL+"/v2.01/"+a.cardRegistration.clientId+"/CardRegistrations/"+b.Id,data:b,success:function(a,b){try{a=JSON.parse(a)}catch(a){return void d({xmlhttp:b,ResultCode:"101699",ResultMessage:"CardRegistration should return a valid JSON response"})}"000000"===a.ResultCode?c(a):d(a)},error:function(a,b){if(b)return d(b);var c="CardRegistration error";if(a.response)try{var e=JSON.parse(a.response);e.Message&&(c=e.Message)}catch(a){}d({xmlhttp:a,ResultCode:"101699",ResultMessage:c})}})}},_validation:{_cvvValidator:{_validate:function(b,c){if("MAESTRO"===c||"BCMC"===c)return!0;if(b=b?b.trim():"",c=c?c.trim():"",a._validation._helpers._validateNumericOnly(b)===!0){if("AMEX"===c&&(3===b.length||4===b.length))return!0;if("CB_VISA_MASTERCARD"===c&&3===b.length)return!0}return{ResultCode:"105204",ResultMessage:"CVV_FORMAT_ERROR"}}},_expirationDateValidator:{_validate:function(a,b){if(a=a?a.trim():"",4===a.length){var c=parseInt(a.substr(2,2),10)+2e3,d=parseInt(a.substr(0,2),10);if(d>0&&d<=12){var e=b.getFullYear();if(e<c)return!0;if(e===c){var f=b.getMonth()+1;if(f<=d)return!0}return{ResultCode:"105203",ResultMessage:"PAST_EXPIRY_DATE_ERROR"}}}return{ResultCode:"105203",ResultMessage:"EXPIRY_DATE_FORMAT_ERROR"}}},_cardNumberValidator:{_validate:function(b){return b=b?b.trim():"",a._validation._helpers._validateNumericOnly(b)===!1?{ResultCode:"105202",ResultMessage:"CARD_NUMBER_FORMAT_ERROR"}:this._validateCheckDigit(b)!==!1||{ResultCode:"105202",ResultMessage:"CARD_NUMBER_FORMAT_ERROR"}},_validateCheckDigit:function(a){for(var b=0,c=0,d=!1,e=a.replace(/\D/g,""),f=e.length-1;f>=0;f--){var g=e.charAt(f),c=parseInt(g,10);d&&(c*=2)>9&&(c-=9),b+=c,d=!d}return b%10===0}},_helpers:{_validateNumericOnly:function(a){var b=/^[0-9]+$/;return!!a.match(b)}}},_networking:{_ajax:function(a){function f(b,c){var d,e;a.crossDomain?(d="001598",e="A cross-origin HTTP request failed"):(d="001597",e="An HTTP request failed"),c&&c.message.length&&(e=e+": "+c.message),a.error(b,{ResultCode:d,ResultMessage:e,xmlhttp:b})}var b=new XMLHttpRequest,c="";for(var d in a.data)c+=(c.length>0?"&":"")+d+"="+encodeURIComponent(a.data[d]);var e=a.url;if("get"===a.type&&(e=a.url+(a.url.indexOf("?")>-1?"&":"?")+c),!a.crossDomain||"withCredentials"in b||!window.XDomainRequest){b.onreadystatechange=function(){4==b.readyState&&(/^2[0-9][0-9]$/.test(b.status)?a.success(b.responseText,b):a.error(b,b.status,b.statusText))};try{b.open(a.type,e,!0)}catch(a){return f(b,a)}"post"===a.type&&b.setRequestHeader("Content-type","application/x-www-form-urlencoded");try{b.send("post"===a.type?c:null)}catch(a){return f(b,a)}}else{xdr=new XDomainRequest,xdr.onerror=function(){a.error(xdr)},xdr.onload=function(){a.success(xdr.responseText,xdr)};try{xdr.open(a.type,e),xdr.send("post"===a.type?c:null)}catch(a){return f(xdr,a)}}}},browser:{corsSupport:function(){return"ReactNative"===window.navigator.product||("withCredentials"in new XMLHttpRequest||!!window.XDomainRequest)}}};return String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),a});

/***/ },

/***/ 432:
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.10.0
	(function() {
	  var QJ, rreturn, rtrim;
	
	  QJ = function(selector) {
	    if (QJ.isDOMElement(selector)) {
	      return selector;
	    }
	    return document.querySelectorAll(selector);
	  };
	
	  QJ.isDOMElement = function(el) {
	    return el && (el.nodeName != null);
	  };
	
	  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	
	  QJ.trim = function(text) {
	    if (text === null) {
	      return "";
	    } else {
	      return (text + "").replace(rtrim, "");
	    }
	  };
	
	  rreturn = /\r/g;
	
	  QJ.val = function(el, val) {
	    var ret;
	    if (arguments.length > 1) {
	      return el.value = val;
	    } else {
	      ret = el.value;
	      if (typeof ret === "string") {
	        return ret.replace(rreturn, "");
	      } else {
	        if (ret === null) {
	          return "";
	        } else {
	          return ret;
	        }
	      }
	    }
	  };
	
	  QJ.preventDefault = function(eventObject) {
	    if (typeof eventObject.preventDefault === "function") {
	      eventObject.preventDefault();
	      return;
	    }
	    eventObject.returnValue = false;
	    return false;
	  };
	
	  QJ.normalizeEvent = function(e) {
	    var original;
	    original = e;
	    e = {
	      which: original.which != null ? original.which : void 0,
	      target: original.target || original.srcElement,
	      preventDefault: function() {
	        return QJ.preventDefault(original);
	      },
	      originalEvent: original,
	      data: original.data || original.detail
	    };
	    if (e.which == null) {
	      e.which = original.charCode != null ? original.charCode : original.keyCode;
	    }
	    return e;
	  };
	
	  QJ.on = function(element, eventName, callback) {
	    var el, i, j, len, len1, multEventName, originalCallback, ref;
	    if (element.length) {
	      for (i = 0, len = element.length; i < len; i++) {
	        el = element[i];
	        QJ.on(el, eventName, callback);
	      }
	      return;
	    }
	    if (eventName.match(" ")) {
	      ref = eventName.split(" ");
	      for (j = 0, len1 = ref.length; j < len1; j++) {
	        multEventName = ref[j];
	        QJ.on(element, multEventName, callback);
	      }
	      return;
	    }
	    originalCallback = callback;
	    callback = function(e) {
	      e = QJ.normalizeEvent(e);
	      return originalCallback(e);
	    };
	    if (element.addEventListener) {
	      return element.addEventListener(eventName, callback, false);
	    }
	    if (element.attachEvent) {
	      eventName = "on" + eventName;
	      return element.attachEvent(eventName, callback);
	    }
	    element['on' + eventName] = callback;
	  };
	
	  QJ.addClass = function(el, className) {
	    var e;
	    if (el.length) {
	      return (function() {
	        var i, len, results;
	        results = [];
	        for (i = 0, len = el.length; i < len; i++) {
	          e = el[i];
	          results.push(QJ.addClass(e, className));
	        }
	        return results;
	      })();
	    }
	    if (el.classList) {
	      return el.classList.add(className);
	    } else {
	      return el.className += ' ' + className;
	    }
	  };
	
	  QJ.hasClass = function(el, className) {
	    var e, hasClass, i, len;
	    if (el.length) {
	      hasClass = true;
	      for (i = 0, len = el.length; i < len; i++) {
	        e = el[i];
	        hasClass = hasClass && QJ.hasClass(e, className);
	      }
	      return hasClass;
	    }
	    if (el.classList) {
	      return el.classList.contains(className);
	    } else {
	      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	    }
	  };
	
	  QJ.removeClass = function(el, className) {
	    var cls, e, i, len, ref, results;
	    if (el.length) {
	      return (function() {
	        var i, len, results;
	        results = [];
	        for (i = 0, len = el.length; i < len; i++) {
	          e = el[i];
	          results.push(QJ.removeClass(e, className));
	        }
	        return results;
	      })();
	    }
	    if (el.classList) {
	      ref = className.split(' ');
	      results = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        cls = ref[i];
	        results.push(el.classList.remove(cls));
	      }
	      return results;
	    } else {
	      return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	    }
	  };
	
	  QJ.toggleClass = function(el, className, bool) {
	    var e;
	    if (el.length) {
	      return (function() {
	        var i, len, results;
	        results = [];
	        for (i = 0, len = el.length; i < len; i++) {
	          e = el[i];
	          results.push(QJ.toggleClass(e, className, bool));
	        }
	        return results;
	      })();
	    }
	    if (bool) {
	      if (!QJ.hasClass(el, className)) {
	        return QJ.addClass(el, className);
	      }
	    } else {
	      return QJ.removeClass(el, className);
	    }
	  };
	
	  QJ.append = function(el, toAppend) {
	    var e;
	    if (el.length) {
	      return (function() {
	        var i, len, results;
	        results = [];
	        for (i = 0, len = el.length; i < len; i++) {
	          e = el[i];
	          results.push(QJ.append(e, toAppend));
	        }
	        return results;
	      })();
	    }
	    return el.insertAdjacentHTML('beforeend', toAppend);
	  };
	
	  QJ.find = function(el, selector) {
	    if (el instanceof NodeList || el instanceof Array) {
	      el = el[0];
	    }
	    return el.querySelectorAll(selector);
	  };
	
	  QJ.trigger = function(el, name, data) {
	    var e, error, ev;
	    try {
	      ev = new CustomEvent(name, {
	        detail: data
	      });
	    } catch (error) {
	      e = error;
	      ev = document.createEvent('CustomEvent');
	      if (ev.initCustomEvent) {
	        ev.initCustomEvent(name, true, true, data);
	      } else {
	        ev.initEvent(name, true, true, data);
	      }
	    }
	    return el.dispatchEvent(ev);
	  };
	
	  module.exports = QJ;
	
	}).call(this);


/***/ },

/***/ 434:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = reach;
	
	
	const defaults = {
	  separator: '.',
	  strict: false,
	  default: undefined
	};
	
	
	function reach (obj, chain, options) {
	  if (typeof chain !== 'string') {
	    throw new TypeError(`Reach path must a string. Found ${chain}.`);
	  }
	
	  const settings = Object.assign({}, defaults, options);
	  const path = chain.split(settings.separator);
	  let ref = obj;
	
	  for (let i = 0; i < path.length; ++i) {
	    let key = path[i];
	
	    if (key[0] === '-' && Array.isArray(ref)) {
	      key = key.slice(1, key.length);
	      key = ref.length - key;
	    }
	
	    // ref must be an object or function and contain key
	    if (ref === null ||
	        (typeof ref !== 'object' && typeof ref !== 'function') ||
	        !(key in ref)) {
	      if (settings.strict) {
	        throw new Error(`Invalid segment, ${key}, in reach path ${chain}.`);
	      }
	
	      return settings.default;
	    }
	
	    ref = ref[key];
	  }
	
	  return ref;
	}


/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/mangopay.ef72e0d4.png";

/***/ }

});
//# sourceMappingURL=1.07b75702.chunk.js.map