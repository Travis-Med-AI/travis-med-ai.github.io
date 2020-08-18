(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"01sy":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n("wx14"),i=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("hhGP"),c=(n("qKvR"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Getting Started/installation.mdx"}});var o={_frontmatter:c},b=r.a;function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)(b,Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"installation"},"Installation"),Object(l.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(l.b)("h3",{id:"docker"},"Docker"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install docker from ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/engine/install/ubuntu/"}),"here"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Make sure to add user to the docker group (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/engine/install/linux-postinstall/"}),"more info"),")")))),Object(l.b)("h3",{id:"nvidia"},"Nvidia"),Object(l.b)("h4",{id:"setup-nvidia-runtime"},"Setup Nvidia Runtime"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install nvidia drivers"),Object(l.b)("li",{parentName:"ul"},"Install nvidia runtime using commands below (more info ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NVIDIA/nvidia-docker#quickstart"}),"here"),")")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#### Add the package repositories\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID)\ncurl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -\ncurl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list\n\nsudo apt-get update && sudo apt-get install -y nvidia-container-toolkit\nsudo systemctl restart docker\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install nvidia-container-runtime")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt install nvidia-container-runtime \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Add the following file at ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/docker/daemon.json"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "runtimes": {\n        "nvidia": {\n            "path": "nvidia-container-runtime",\n            "runtimeArgs": []\n        }\n    }\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Test that the setup is working with the following command")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run --runtime=nvidia nvidia/cuda:10.0-base nvidia-smi\n")),Object(l.b)("h2",{id:"clone-repository"},"Clone repository"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:tclarke104/med-ai --recursive-submodules # download\ncd med-ai/med-ai-model\nchmod +x ./build.sh\n./build.sh\n")),Object(l.b)("h2",{id:"start-project"},"Start project"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd med-ai\ndocker-compose up --build\n")),Object(l.b)("p",null,"Site will be running at localhost:4200."))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Getting Started/installation.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-getting-started-installation-mdx-6d2626ccdae8de2225d7.js.map