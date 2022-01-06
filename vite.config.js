import { createVuePlugin } from 'vite-plugin-vue2'
import htmlTemplate from 'vite-plugin-html-template'
import path from 'path'
export default {
    plugins: [createVuePlugin(), htmlTemplate()],
    server: {
        host: '0.0.0.0',
        port: 8080,
        open: true,
    },
    //解决 Uncaught ReferenceError: process is not defined
    define: {
        'process.env': {},
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            '~': path.join(__dirname, 'node_modules'), // 这个通常给 css import 用的
        },
    },
}