//包装函数
module.exports = function(grunt){

	//配置任务，所有插件的配置信息
	grunt.initConfig({

		
	
	});

	 grunt.initConfig({  
	//获取 package.json的信息
		pkg: grunt.file.readJSON('package.json'),
        watch:{
            start:{
                files: ['website/*.html']
            }
        }
    });

    grunt.event.on('watch', function(action, filepath, target) {
          grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('hello', 'Hello, world task description.', function() {
            grunt.log.writeln('Hello, world.');
    });
	//告诉grunt当我们在终端输入grunt时需要做些什么

	//grunt.registerTask('default',[]);
}