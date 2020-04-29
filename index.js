/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */

// Find the bindings.
const raylib = require('bindings')('node-raylib')
const enums = require('./src/enums')
const {format} = require('util')

// Inject the enums.
for (const enumName in enums) {
  raylib[enumName] = enums[enumName]
}

raylib.PI = 3.14159265358979323846
raylib.DEG2RAD = (raylib.PI / 180)
raylib.RAD2DEG = (180 / raylib.PI)
raylib.MAX_TOUCH_POINTS = 10
raylib.MAX_SHADER_LOCATIONS = 32
raylib.MAX_MATERIAL_MAPS = 12

// Wrapped Functions

/**
 * Text formatting with variables (sprintf style)
 */
raylib.TextFormat = format

/**
 * Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR).
 *
 * @param {number} logType The type of message to present.
 */
raylib.TraceLog = function (logType, ...args) {
  raylib.TraceLogWrap(logType, raylib.TextFormat(...args))
}

// Colors
raylib.Color = function (red, green, blue, alpha = 255) {
  return {
    r: red,
    g: green,
    b: blue,
    a: alpha
  }
}

raylib.LIGHTGRAY = raylib.Color(200, 200, 200, 255) // Light Gray
raylib.GRAY = raylib.Color(130, 130, 130, 255) // Gray
raylib.DARKGRAY = raylib.Color(80, 80, 80, 255) // Dark Gray
raylib.YELLOW = raylib.Color(253, 249, 0, 255) // Yellow
raylib.GOLD = raylib.Color(255, 203, 0, 255) // Gold
raylib.ORANGE = raylib.Color(255, 161, 0, 255) // Orange
raylib.PINK = raylib.Color(255, 109, 194, 255) // Pink
raylib.RED = raylib.Color(230, 41, 55, 255) // Red
raylib.MAROON = raylib.Color(190, 33, 55, 255) // Maroon
raylib.GREEN = raylib.Color(0, 228, 48, 255) // Green
raylib.LIME = raylib.Color(0, 158, 47, 255) // Lime
raylib.DARKGREEN = raylib.Color(0, 117, 44, 255) // Dark Green
raylib.SKYBLUE = raylib.Color(102, 191, 255, 255) // Sky Blue
raylib.BLUE = raylib.Color(0, 121, 241, 255) // Blue
raylib.DARKBLUE = raylib.Color(0, 82, 172, 255) // Dark Blue
raylib.PURPLE = raylib.Color(200, 122, 255, 255) // Purple
raylib.VIOLET = raylib.Color(135, 60, 190, 255) // Violet
raylib.DARKPURPLE = raylib.Color(112, 31, 126, 255) // Dark Purple
raylib.BEIGE = raylib.Color(211, 176, 131, 255) // Beige
raylib.BROWN = raylib.Color(127, 106, 79, 255) // Brown
raylib.DARKBROWN = raylib.Color(76, 63, 47, 255) // Dark Brown
raylib.WHITE = raylib.Color(255, 255, 255, 255) // White
raylib.BLACK = raylib.Color(0, 0, 0, 255) // Black
raylib.BLANK = raylib.Color(0, 0, 0, 0) // Blank (Transparent)
raylib.MAGENTA = raylib.Color(255, 0, 255, 255) // Magenta
raylib.RAYWHITE = raylib.Color(245, 245, 245, 255) // My own White (raylib logo)

/**
 * Create a Vector2 object.
 *
 * @param {number} x The x parameter.
 * @param {number} y The y parameter.
 */
raylib.Vector2 = function (x = 0, y = 0) {
  return {
    x,
    y
  }
}

raylib.Vector3 = function (x = 0, y = 0, z = 0) {
  return {
    x,
    y,
    z
  }
}

raylib.Vector4 = function (x = 0, y = 0, z = 0, w = 0) {
  return {
    x,
    y,
    z,
    w
  }
}

raylib.Rectangle = function (x = 0, y = 0, width = 0, height = 0) {
  return {
    x,
    y,
    width,
    height
  }
}

raylib.Camera2D = function (offset, target, rotation, zoom) {
  return {
    offset,
    target,
    rotation,
    zoom
  }
}

raylib.Camera = function (position, target, up, fovy, type) {
  return {
    position,
    target,
    up,
    fovy,
    type
  }
}

raylib.Camera3D = raylib.Camera

/**
 * UpdateCamera is wrapped to allow object reference.
 *
 * @see UpdateCameraWrap()
 */
raylib.UpdateCamera = function (camera) {
  const newCamera = raylib.UpdateCameraWrap(camera)
  if (newCamera) {
    camera.position = newCamera.position
    camera.target = newCamera.target
    camera.up = newCamera.up
    camera.fovy = newCamera.fovy
    camera.type = newCamera.type
  }
}

raylib.VrDeviceInfo = function () {
  return {
    hResolution: 2160,
    vResolution: 1200,
    hScreenSize: 0.133793,
    vScreenSize: 0.0669,
    vScreenCenter: 0.04678,
    eyeToScreenDistance: 0.041,
    lensSeparationDistance: 0.07,
    interpupillaryDistance: 0.07,
    lensDistortionValues: [1, 0.22, 0.24, 0],
    chromaAbCorrection: [0.996, -0.004, 1.014, 0]
  }
}

/**
 * UpdateVrTracking is wrapped to allow object reference.
 *
 * @see UpdateVrTrackingWrap()
 */
raylib.UpdateVrTracking = function (camera) {
  const newCamera = raylib.UpdateVrTrackingWrap(camera)
  if (newCamera) {
    camera.position = newCamera.position
    camera.target = newCamera.target
    camera.up = newCamera.up
    camera.fovy = newCamera.fovy
    camera.type = newCamera.type
  }
}

raylib.Ray = function (position, direction) {
  return {
    position,
    direction
  }
}

raylib.RayHitInfo = function (hit, distance, position, normal) {
  return {
    hit,
    distance,
    position,
    normal
  }
}

raylib.Shader = function (id, locs) {
  return {
    id,
    locs
  }
}

// #defines
raylib.FormatText = raylib.TextFormat
raylib.SubText = raylib.TextSubtext
raylib.ShowWindow = raylib.UnhideWindow
raylib.LoadText = raylib.LoadFileText

// Export the bindings for the module.
module.exports = raylib
