cmake_minimum_required(VERSION 2.8)

set(CMAKE_CXX_STANDARD 11) # C++11...
set(CMAKE_CXX_STANDARD_REQUIRED ON) #...is required...
set(CMAKE_CXX_EXTENSIONS OFF) #...without compiler extensions like gnu++11

if(APPLE)
    ADD_DEFINITIONS("-x objective-c++")
endif(APPLE)

# Name of the project (will be the name of the plugin)
project(NexusNative)
# Build a shared library named after the project from the files in `src/`
file(GLOB SOURCE_FILES "./*.cc" "./*.h" "./*.mm")
add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES})

# Gives our library file a .node extension without any "lib" prefix
set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")

# Essential include files to build a node addon,
# You should add this line in every CMake.js based project
target_include_directories(${PROJECT_NAME} PRIVATE ${CMAKE_JS_INC})

# Essential library files to link to a node addon
# You should add this line in every CMake.js based project
target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB})

include_directories(./nan-headers)
