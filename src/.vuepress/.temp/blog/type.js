export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-3a249a67","v-40948dda","v-54080518","v-fb9569b6","v-174f4e80","v-36173dce","v-349f3bc1","v-6c4c99d6","v-58aa66ac","v-1569f423","v-092e7941","v-569264dc","v-93147c58"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-3a249a67","v-40948dda","v-54080518","v-fb9569b6","v-174f4e80","v-36173dce","v-349f3bc1","v-6c4c99d6","v-58aa66ac","v-1569f423","v-092e7941","v-569264dc","v-93147c58"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

