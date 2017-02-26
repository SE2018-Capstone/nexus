#import <Cocoa/cocoa.h>

NSWindow* nsWindow;

void init(void *handle) {
  NSView * view = (NSView *) handle;
  nsWindow = view.window;
  [nsWindow setLevel:kCGNormalWindowLevel - 1];
  [nsWindow setCollectionBehavior:
    (NSWindowCollectionBehaviorCanJoinAllSpaces |
     NSWindowCollectionBehaviorStationary |
     NSWindowCollectionBehaviorIgnoresCycle)];
}

void enableGhost() {
  [nsWindow setIgnoresMouseEvents:YES];
  nsWindow.alphaValue = 0.5;
}

void disableGhost() {
  [nsWindow setIgnoresMouseEvents:NO];
  nsWindow.alphaValue = 1;
}