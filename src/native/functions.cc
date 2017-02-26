#include "functions.h"
#include <iostream>
using namespace std;

NAN_METHOD(init) {
  cout << "Hello World" << endl;
}
