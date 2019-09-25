#import "React/RCTBridgeModule.h"
#import <Foundation/Foundation.h>

@interface RCT_EXTERN_MODULE (TestNativeModule, NSObject)
RCT_EXTERN_METHOD(increment
                  : (NSInteger)origin withCallback
                  : (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(decrement
                  : (NSInteger)origin withResolve
                  : (RCTPromiseResolveBlock)resolve withReject
                  : (RCTPromiseRejectBlock)reject)
@end
