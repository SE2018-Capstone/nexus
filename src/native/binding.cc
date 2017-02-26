#include "functions.h"

using v8::FunctionTemplate;

// C++ constructs that are exposed to javascript are exported here
NAN_MODULE_INIT(InitAll) {
  Nan::Set(target, Nan::New("init").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(init)).ToLocalChecked());
}

NODE_MODULE(binding, InitAll)
