document.addEventListener('DOMContentLoaded', () => {
    // 1. 기본 설정 및 데이터 정의
    const categories = [
        { id: 'tofu', displayName: '두채류' },
        { id: 'egg', displayName: '계란' },
        { id: 'roasted', displayName: '구운란' },
        { id: 'stevia', displayName: '스테비아' },
        { id: 'fish', displayName: '수산' },
        { id: 'meat', displayName: '축산' }
    ];
    
    const now = new Date();
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} (${dayNames[now.getDay()]})`;
    
    // 2. 상/하단 배너 날짜 업데이트
    const topDisplay = document.getElementById('top-display');
    const bottomDisplay = document.getElementById('today-display');
    
    if (topDisplay) topDisplay.textContent = formattedDate;
    if (bottomDisplay) bottomDisplay.textContent = formattedDate;

    // 3. 각 품목별 날짜 계산 및 렌더링 실행
    initAll();

    function initAll() {
        categories.forEach(item => {
            try {
                const targets = calcDates(item.id);
                render(item.id, targets);
            } catch (err) {
                console.error(`${item.id} 계산 중 오류 발생:`, err);
            }
        });
    }

    // 4. 할인 기준별 타겟 날짜 계산 로직
    function calcDates(id) {
        const getStr = (off) => {
            const d = new Date();
            d.setDate(d.getDate() + off);
            return `${d.getMonth() + 1}/${d.getDate()}`;
        };

        let lowDate = '', d40 = '', discardDate = '';

        switch(id) {
            case 'tofu': 
                lowDate = getStr(2); d40 = getStr(1); discardDate = getStr(0); break;
            case 'egg': 
                lowDate = getStr(6); d40 = getStr(5); discardDate = getStr(0); break;
            case 'roasted': 
                lowDate = getStr(3); d40 = getStr(2); discardDate = getStr(0); break;
            case 'stevia': 
                lowDate = getStr(3); d40 = `${getStr(0)}~${getStr(2)}`; discardDate = getStr(-1); break;
            case 'fish': 
                lowDate = getStr(1); d40 = getStr(0); discardDate = getStr(-1); break;
            case 'meat': 
                lowDate = getStr(2); d40 = `${getStr(0)}~${getStr(1)}`; discardDate = getStr(-1); break;
        }
        return { low: lowDate, d40: d40, discard: discardDate };
    }

    // 5. 화면에 데이터 뿌리기
    function render(id, data) {
        const elLow = document.getElementById(`date-20-${id}`);
        const el40 = document.getElementById(`date-40-${id}`);
        const elDisc = document.getElementById(`date-discard-${id}`);
        
        if (elLow) elLow.textContent = data.low;
        if (el40) el40.textContent = data.d40;
        if (elDisc) elDisc.textContent = data.discard;
    }
});
