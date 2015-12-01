
var ifCond = function (v1, operator, v2, options) {
    var predicate;
    switch (operator) {
      case 'contains':
        predicate = v1.indexOf(v2) !== -1; break;
      case '==':
        predicate = v1 == v2; break;
      case '===':
        predicate = v1 === v2; break;
      case '<':
        predicate = v1 < v2; break;
      case '<=':
        predicate = v1 <= v2; break;
      case '>':
        predicate = v1 > v2; break;
      case '>=':
        predicate = v1 >= v2; break;
      case '&&':
        predicate = v1 && v2; break;
      case '||':
        predicate = v1 || v2; break;
      default:
        predicate = false;
    }
    return predicate ? options.fn(this) : options.inverse(this);
  };
module.exports = ifCond;
