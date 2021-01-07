// Refactor this statement to use an if statement instead.
return foo() ? "bar" : qux();

function foo() {
  if ("bar") {
    return true;
  } else {
    qux();
  }
}

