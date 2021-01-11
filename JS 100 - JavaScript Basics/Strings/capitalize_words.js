/*
Write code that capitalizes the words in the string 'launch school tech & talk',
so that you get the string 'Launch School Tech & Talk'.
*/
let launch_school = "launch school tech & talk";

launch_school = launch_school.toLowerCase()
                             .split(' ')
                             .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                             .join(' ');
