import {
    createVuePlugin
} from 'vite-plugin-vue2'
import htmlTemplate from 'vite-plugin-html-template'
import {
    visualizer
} from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
// import viteImagemin from 'vite-plugin-imagemin';
import path from 'path'
export default {
    plugins: [createVuePlugin(), htmlTemplate(), visualizer(), viteCompression(),
        // viteImagemin({
        //     gifsicle: {
        //         optimizationLevel: 7,
        //         interlaced: false,
        //     },
        //     optipng: {
        //         optimizationLevel: 7,
        //     },
        //     mozjpeg: {
        //         quality: 20,
        //     },
        //     pngquant: {
        //         quality: [0.8, 0.9],
        //         speed: 4,
        //     },
        //     svgo: {
        //         plugins: [{
        //                 name: 'removeViewBox',
        //             },
        //             {
        //                 name: 'removeEmptyAttrs',
        //                 active: false,
        //             },
        //         ],
        //     },
        // }),
    ],
    base: './',
    server: {
        host: '0.0.0.0',
        port: 8080,
        open: true,
    },
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            }
        },
        rollupOptions: {
            output: {
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
                // assetFileNames:'[ext]/[name]-[hash].[ext]',
            }
        }
    },
    //解决 Uncaught ReferenceError: process is not defined
    define: {
        'process.env': {},
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            '~': path.join(__dirname, 'node_modules'), // 这个通常给 css import 用的
            // '/img': './src/assets/img' //图片 
        },
    },
}