class Timer {

    /**
     * 倒计时方法
     * @param  number end    截止时间
     * @param  function update 每次更新时间时的回调函数
     * @param  function handle 倒计时结束时的回调函数
     * @return
     */
    countdown(end, update, handle) {
        const now = new Date().getTime(); // 获取当前时间
        const self = this; // 获取当前对象的指针

        if (now - end > 0) { // 如果当前时间大于截止时间，说明倒计时已经结束了
            handle.call(self); // 执行倒计时结束的回调 handle
        } else { // 倒计时没有结束
            // 剩余时间
            let last_time = end - now;

            // 常量，用来处理毫秒转天，时，分，秒
            const px_d = 1000 * 60 * 60 * 24;
            const px_h = 1000 * 60 * 60;
            const px_m = 1000 * 60;
            const px_s = 1000;

            // 剩余时间转换为天，时，分，秒
            let d = Math.floor(last_time / px_d);
            // 需要减去天的毫秒数
            let h = Math.floor((last_time - d * px_d) / px_h);
            // 需要减去天和小时的毫秒数
            let m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
            // 需要减去天和小时和分钟的毫秒数
            let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);

            let r = [];
            if (d > 0) {
                r.push(`<em>${d}</em>天`);
            }
            // 判断数组长度主要是为了防止数据错乱，例如只有时，没有分，秒的情况
            if (r.length || (h > 0)) {
                r.push(`<em>${h}</em>时`);
            }
            if (r.length || m > 0) {
                r.push(`<em>${m}</em>分`);
            }
            if (r.length || s > 0) {
                r.push(`<em>${s}</em>秒`);
            }

            update.call(self, r.join('')); // 执行每次更新时间时的回调函数 update，使用的是计算之后的倒计时时间

            // 间隔每秒执行一次，重新执行倒计时程序
            setTimeout(function () {
                self.countdown(end, update, handle);
            }, 1000);
        }
    }
}

export default Timer