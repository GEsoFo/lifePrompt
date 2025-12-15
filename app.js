(function () {
    console.log('人生K线 · 终极离线版 v6.0（正确JSON结构，完美匹配前端，永不报错）');


    // 正确的返回结构：chartData 在根级，analysis 包含所有文字分析
    const fakeReportJson =

    const fakeTaskResponse = {
        task_id: "offline_perfect_report_001",
        queue_position: 0,
        estimated_wait_minutes: 0
    };

    const fakeTaskResult = {
        status: "completed",
        result: fakeReportJson
    };

    let injected = false;

    function injectInterceptor() {
        if (injected) return;

        const originalFetch = window.fetch;

        window.fetch = function (url, options) {
            const u = typeof url === 'string' ? url : (url?.url || '');

            if (u.includes('/api/analyze')) {
                console.log('拦截提交 → 返回任务ID');
                return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(fakeTaskResponse) });
            }

            if (u.includes('/api/task/')) {
                console.log('拦截轮询 → 返回正确结构完整报告');
                return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(fakeTaskResult) });
            }

            return originalFetch.call(window, url, options);
        };

        injected = true;
        console.log('终极离线模式激活！结构完全匹配前端，完美出图无报错');
    }

    const observer = new MutationObserver(() => {
        document.querySelectorAll('button').forEach(btn => {
            const text = btn.textContent?.trim();
            if (text && text.includes('确认无误') && text.includes('开始AI分析')) {
                if (!btn.dataset.finalOffline) {
                    btn.dataset.finalOffline = '1';
                    btn.addEventListener('click', injectInterceptor, { once: true });
                    console.log('已就绪：点击“开始AI分析”即秒出完美报告');
                }
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();