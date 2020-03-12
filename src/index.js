module.exports = function check(string, bracketsConfig) {

  if(string.length % 2 !== 0) return false;

  for(let i = 0; i < 30; i++){
    string = string.replace(new RegExp(bracketsConfig.map(value => value.map(value =>  /^\d+$/.test(value) ? value : '\\' + value   ).join('')).join('|'),"g"),'');
  }
 
  return !string

}
