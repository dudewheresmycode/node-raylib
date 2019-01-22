#include <napi.h>
#include "drawing.h"
#include "files.h"
#include "text.h"
#include "timing.h"
#include "window.h"

/**
 * Initialize all the node-raylib modules.
 */
Napi::Object Init(Napi::Env env, Napi::Object exports) {
  node_raylib_init_drawing(env, exports);
  node_raylib_init_files(env, exports);
  node_raylib_init_text(env, exports);
  node_raylib_init_timing(env, exports);
  node_raylib_init_window(env, exports);

  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
