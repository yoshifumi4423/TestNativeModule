require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-test-native-module"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-test-native-module
                   DESC
  s.homepage     = "https://github.com/yoshifumi4423/react-native-test-native-module"
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = { "Yoshifumi Kanno" => "ykpublicjp@gmail.com" }
  s.platforms    = { :ios => "9.0", :tvos => "10.0" }
  s.source       = { :git => "https://github.com/yoshifumi4423/react-native-test-native-module.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.swift_version = '5.0'
  
  s.dependency "React"
	
  # s.dependency "..."
end

