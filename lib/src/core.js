"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var raylib_1 = require("./bindings/raylib");
exports.InitWindow = raylib_1.default.InitWindow; //Initialize window and OpenGL context 
exports.WindowShouldClose = raylib_1.default.WindowShouldClose; //Check if KEY_ESCAPE pressed or Close icon pressed 
exports.CloseWindow = raylib_1.default.CloseWindow; //Close window and unload OpenGL context 
exports.IsWindowReady = raylib_1.default.IsWindowReady; //Check if window has been initialized successfully 
exports.IsWindowMinimized = raylib_1.default.IsWindowMinimized; //Check if window has been minimized (or lost focus) 
exports.IsWindowResized = raylib_1.default.IsWindowResized; //Check if window has been resized 
exports.IsWindowHidden = raylib_1.default.IsWindowHidden; //Check if window is currently hidden 
exports.ToggleFullscreen = raylib_1.default.ToggleFullscreen; //Toggle fullscreen mode (only PLATFORM_DESKTOP) 
exports.UnhideWindow = raylib_1.default.UnhideWindow; //Show the window 
exports.HideWindow = raylib_1.default.HideWindow; //Hide the window 
exports.SetWindowIcon = raylib_1.default.SetWindowIcon; //Set icon for window (only PLATFORM_DESKTOP) 
exports.SetWindowTitle = raylib_1.default.SetWindowTitle; //Set title for window (only PLATFORM_DESKTOP) 
exports.SetWindowPosition = raylib_1.default.SetWindowPosition; //Set window position on screen (only PLATFORM_DESKTOP) 
exports.SetWindowMonitor = raylib_1.default.SetWindowMonitor; //Set monitor for the current window (fullscreen mode) 
exports.SetWindowMinSize = raylib_1.default.SetWindowMinSize; //Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE) 
exports.SetWindowSize = raylib_1.default.SetWindowSize; //Set window dimensions 
exports.GetWindowHandle = raylib_1.default.GetWindowHandle; //Get native window handle 
exports.GetScreenWidth = raylib_1.default.GetScreenWidth; //Get current screen width 
exports.GetScreenHeight = raylib_1.default.GetScreenHeight; //Get current screen height 
exports.GetMonitorCount = raylib_1.default.GetMonitorCount; //Get number of connected monitors 
exports.GetMonitorWidth = raylib_1.default.GetMonitorWidth; //Get primary monitor width 
exports.GetMonitorHeight = raylib_1.default.GetMonitorHeight; //Get primary monitor height 
exports.GetMonitorPhysicalWidth = raylib_1.default.GetMonitorPhysicalWidth; //Get primary monitor physical width in millimetres 
exports.GetMonitorPhysicalHeight = raylib_1.default.GetMonitorPhysicalHeight; //Get primary monitor physical height in millimetres 
exports.GetMonitorName = raylib_1.default.GetMonitorName; //Get the human-readable, UTF-8 encoded name of the primary monitor 
exports.GetClipboardText = raylib_1.default.GetClipboardText; //Get clipboard text content 
exports.SetClipboardText = raylib_1.default.SetClipboardText; //Set clipboard text content 
exports.ShowCursor = raylib_1.default.ShowCursor; //Shows cursor 
exports.HideCursor = raylib_1.default.HideCursor; //Hides cursor 
exports.IsCursorHidden = raylib_1.default.IsCursorHidden; //Check if cursor is not visible 
exports.EnableCursor = raylib_1.default.EnableCursor; //Enables cursor (unlock cursor) 
exports.DisableCursor = raylib_1.default.DisableCursor; //Disables cursor (lock cursor) 
exports.ClearBackground = raylib_1.default.ClearBackground; //Set background color (framebuffer clear color) 
exports.BeginDrawing = raylib_1.default.BeginDrawing; //Setup canvas (framebuffer) to start drawing 
exports.EndDrawing = raylib_1.default.EndDrawing; //End canvas drawing and swap buffers (double buffering) 
exports.BeginMode2D = raylib_1.default.BeginMode2D; //Initialize 2D mode with custom camera (2D) 
exports.EndMode2D = raylib_1.default.EndMode2D; //Ends 2D mode with custom camera 
exports.BeginMode3D = raylib_1.default.BeginMode3D; //Initializes 3D mode with custom camera (3D) 
exports.EndMode3D = raylib_1.default.EndMode3D; //Ends 3D mode and returns to default 2D orthographic mode 
exports.BeginTextureMode = raylib_1.default.BeginTextureMode; //Initializes render texture for drawing 
exports.EndTextureMode = raylib_1.default.EndTextureMode; //Ends drawing to render texture 
exports.GetMouseRay = raylib_1.default.GetMouseRay; //Returns a ray trace from mouse position 
exports.GetWorldToScreen = raylib_1.default.GetWorldToScreen; //Returns the screen space position for a 3d world space position 
exports.GetCameraMatrix = raylib_1.default.GetCameraMatrix; //Returns camera transform matrix (view matrix) 
exports.SetTargetFPS = raylib_1.default.SetTargetFPS; //Set target FPS (maximum) 
exports.GetFPS = raylib_1.default.GetFPS; //Returns current FPS 
exports.GetFrameTime = raylib_1.default.GetFrameTime; //Returns time in seconds for last frame drawn 
exports.GetTime = raylib_1.default.GetTime; //Returns elapsed time in seconds since InitWindow() 
exports.ColorToInt = raylib_1.default.ColorToInt; //Returns hexadecimal value for a Color 
exports.ColorNormalize = raylib_1.default.ColorNormalize; //Returns color normalized as float [0..1] 
exports.ColorToHSV = raylib_1.default.ColorToHSV; //Returns HSV values for a Color 
exports.ColorFromHSV = raylib_1.default.ColorFromHSV; //Returns a Color from HSV values 
exports.GetColor = raylib_1.default.GetColor; //Returns a Color struct from hexadecimal value 
exports.Fade = raylib_1.default.Fade; //Color fade-in or fade-out, alpha goes from 0.0f to 1.0f 
exports.SetConfigFlags = raylib_1.default.SetConfigFlags; //Setup window configuration flags (view FLAGS) 
exports.SetTraceLogLevel = raylib_1.default.SetTraceLogLevel; //Set the current threshold (minimum) log level 
exports.SetTraceLogExit = raylib_1.default.SetTraceLogExit; //Set the exit threshold (minimum) log level 
exports.SetTraceLogCallback = raylib_1.default.SetTraceLogCallback; //Set a trace log callback to enable custom logging 
exports.TraceLog = raylib_1.default.TraceLog; //Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR) 
exports.TakeScreenshot = raylib_1.default.TakeScreenshot; //Takes a screenshot of current screen (saved a .png) 
exports.GetRandomValue = raylib_1.default.GetRandomValue; //Returns a random value between min and max (both included) 
exports.FileExists = raylib_1.default.FileExists; //Check if file exists 
exports.IsFileExtension = raylib_1.default.IsFileExtension; //Check file extension 
exports.GetExtension = raylib_1.default.GetExtension; //Get pointer to extension for a filename string 
exports.GetFileName = raylib_1.default.GetFileName; //Get pointer to filename for a path string 
exports.GetFileNameWithoutExt = raylib_1.default.GetFileNameWithoutExt; //Get filename string without extension (memory should be freed) 
exports.GetDirectoryPath = raylib_1.default.GetDirectoryPath; //Get full path for a given fileName (uses static string) 
exports.GetWorkingDirectory = raylib_1.default.GetWorkingDirectory; //Get current working directory (uses static string) 
exports.GetDirectoryFiles = raylib_1.default.GetDirectoryFiles; //Get filenames in a directory path (memory should be freed) 
exports.ClearDirectoryFiles = raylib_1.default.ClearDirectoryFiles; //Clear directory files paths buffers (free memory) 
exports.ChangeDirectory = raylib_1.default.ChangeDirectory; //Change working directory, returns true if success 
exports.IsFileDropped = raylib_1.default.IsFileDropped; //Check if a file has been dropped into window 
exports.GetDroppedFiles = raylib_1.default.GetDroppedFiles; //Get dropped files names (memory should be freed) 
exports.ClearDroppedFiles = raylib_1.default.ClearDroppedFiles; //Clear dropped files paths buffer (free memory) 
exports.GetFileModTime = raylib_1.default.GetFileModTime; //Get file modification time (last write time) 
exports.StorageSaveValue = raylib_1.default.StorageSaveValue; //Save integer value to storage file (to defined position) 
exports.StorageLoadValue = raylib_1.default.StorageLoadValue; //Load integer value from storage file (from defined position) 
exports.OpenURL = raylib_1.default.OpenURL; //Open URL with default system browser (if available) 
exports.IsKeyPressed = raylib_1.default.IsKeyPressed; //Detect if a key has been pressed once 
exports.IsKeyDown = raylib_1.default.IsKeyDown; //Detect if a key is being pressed 
exports.IsKeyReleased = raylib_1.default.IsKeyReleased; //Detect if a key has been released once 
exports.IsKeyUp = raylib_1.default.IsKeyUp; //Detect if a key is NOT being pressed 
exports.GetKeyPressed = raylib_1.default.GetKeyPressed; //Get latest key pressed 
exports.SetExitKey = raylib_1.default.SetExitKey; //Set a custom key to exit program (default is ESC) 
exports.IsGamepadAvailable = raylib_1.default.IsGamepadAvailable; //Detect if a gamepad is available 
exports.IsGamepadName = raylib_1.default.IsGamepadName; //Check gamepad name (if available) 
exports.GetGamepadName = raylib_1.default.GetGamepadName; //Return gamepad internal name id 
exports.IsGamepadButtonPressed = raylib_1.default.IsGamepadButtonPressed; //Detect if a gamepad button has been pressed once 
exports.IsGamepadButtonDown = raylib_1.default.IsGamepadButtonDown; //Detect if a gamepad button is being pressed 
exports.IsGamepadButtonReleased = raylib_1.default.IsGamepadButtonReleased; //Detect if a gamepad button has been released once 
exports.IsGamepadButtonUp = raylib_1.default.IsGamepadButtonUp; //Detect if a gamepad button is NOT being pressed 
exports.GetGamepadButtonPressed = raylib_1.default.GetGamepadButtonPressed; //Get the last gamepad button pressed 
exports.GetGamepadAxisCount = raylib_1.default.GetGamepadAxisCount; //Return gamepad axis count for a gamepad 
exports.GetGamepadAxisMovement = raylib_1.default.GetGamepadAxisMovement; //Return axis movement value for a gamepad axis 
exports.IsMouseButtonPressed = raylib_1.default.IsMouseButtonPressed; //Detect if a mouse button has been pressed once 
exports.IsMouseButtonDown = raylib_1.default.IsMouseButtonDown; //Detect if a mouse button is being pressed 
exports.IsMouseButtonReleased = raylib_1.default.IsMouseButtonReleased; //Detect if a mouse button has been released once 
exports.IsMouseButtonUp = raylib_1.default.IsMouseButtonUp; //Detect if a mouse button is NOT being pressed 
exports.GetMouseX = raylib_1.default.GetMouseX; //Returns mouse position X 
exports.GetMouseY = raylib_1.default.GetMouseY; //Returns mouse position Y 
exports.GetMousePosition = raylib_1.default.GetMousePosition; //Returns mouse position XY 
exports.SetMousePosition = raylib_1.default.SetMousePosition; //Set mouse position XY 
exports.SetMouseOffset = raylib_1.default.SetMouseOffset; //Set mouse offset 
exports.SetMouseScale = raylib_1.default.SetMouseScale; //Set mouse scaling 
exports.GetMouseWheelMove = raylib_1.default.GetMouseWheelMove; //Returns mouse wheel movement Y 
exports.GetTouchX = raylib_1.default.GetTouchX; //Returns touch position X for touch point 0 (relative to screen size) 
exports.GetTouchY = raylib_1.default.GetTouchY; //Returns touch position Y for touch point 0 (relative to screen size) 
exports.GetTouchPosition = raylib_1.default.GetTouchPosition; //Returns touch position XY for a touch point index (relative to screen size) 
exports.SetGesturesEnabled = raylib_1.default.SetGesturesEnabled; //Enable a set of gestures using flags 
exports.IsGestureDetected = raylib_1.default.IsGestureDetected; //Check if a gesture have been detected 
exports.GetGestureDetected = raylib_1.default.GetGestureDetected; //Get latest detected gesture 
exports.GetTouchPointsCount = raylib_1.default.GetTouchPointsCount; //Get touch points count 
exports.GetGestureHoldDuration = raylib_1.default.GetGestureHoldDuration; //Get gesture hold time in milliseconds 
exports.GetGestureDragVector = raylib_1.default.GetGestureDragVector; //Get gesture drag vector 
exports.GetGestureDragAngle = raylib_1.default.GetGestureDragAngle; //Get gesture drag angle 
exports.GetGesturePinchVector = raylib_1.default.GetGesturePinchVector; //Get gesture pinch delta 
exports.GetGesturePinchAngle = raylib_1.default.GetGesturePinchAngle; //Get gesture pinch angle 
exports.SetCameraMode = raylib_1.default.SetCameraMode; //Set camera mode (multiple camera modes available) 
exports.UpdateCamera = raylib_1.default.UpdateCamera; //Update camera position for selected mode 
exports.SetCameraPanControl = raylib_1.default.SetCameraPanControl; //Set camera pan key to combine with mouse movement (free camera) 
exports.SetCameraAltControl = raylib_1.default.SetCameraAltControl; //Set camera alt key to combine with mouse movement (free camera) 
exports.SetCameraSmoothZoomControl = raylib_1.default.SetCameraSmoothZoomControl; //Set camera smooth zoom key to combine with mouse (free camera) 
exports.SetCameraMoveControls = raylib_1.default.SetCameraMoveControls; //Set camera move controls (1st person and 3rd person cameras) 