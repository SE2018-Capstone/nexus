#include <nan.h>
#include "functions.h"

using v8::FunctionTemplate;

// C++ constructs that are exposed to javascript are exported here
NAN_MODULE_INIT(InitAll) {
  Nan::Set(target, Nan::New("init").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(nexus_init)).ToLocalChecked());
  Nan::Set(target, Nan::New("enableGhost").ToLocalChecked(),
           Nan::GetFunction(Nan::New<FunctionTemplate>(nexus_enable_ghost)).ToLocalChecked());
  Nan::Set(target, Nan::New("disableGhost").ToLocalChecked(),
           Nan::GetFunction(Nan::New<FunctionTemplate>(nexus_disable_ghost)).ToLocalChecked());
}

NODE_MODULE(binding, InitAll)
