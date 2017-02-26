#include <iostream>
#include <nan.h>
using namespace std;


#include "mac_helpers.h"

NAN_METHOD(nexus_init) {
  v8::Local<v8::Object> bufferObj = info[0].As<v8::Object>();
  char *buf = node::Buffer::Data(info[0]);
  void *handle = *reinterpret_cast<void **>(buf);
  init(handle);
}

NAN_METHOD(nexus_enable_ghost) {
  enableGhost();
}

NAN_METHOD(nexus_disable_ghost) {
  disableGhost();
}
