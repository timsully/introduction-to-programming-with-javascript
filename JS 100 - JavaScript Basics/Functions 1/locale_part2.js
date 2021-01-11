/*
Similar to the previous exercise, now write a function that extracts
the region code from a locale. For example:
*/

function extractRegion(string) {
  let string1 = string.split('.');
  let string2 = string1[0].split('_');
  let final_string = string2.shift(0);
  let fixed_string = string2.toString();
  console.log(fixed_string);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
