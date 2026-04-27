document.addEventListener('DOMContentLoaded', () => {
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
    
    const todayDisplay = document.getElementById('today-display');
    const topDisplay = document.getElementById('top-display');
    
    if (todayDisplay) todayDisplay.textContent = formattedDate;
    if (topDisplay) topDisplay.textContent = formattedDate;

    initAll();

    function initAll() {
        categories.forEach(item => {
            const targets = calcDates(item.id);
            render(item.id, targets);
        });
    }

    function calcDates(id) {
        const getStr = (off) => {
            const d = new Date();
            d.setDate(d.getDate() + off);
            return `${d.getMonth() + 1}/${d.getDate()}`;
        };
        let dLow = '', d40 = '', discard = '';
        switch(id) {
            case 'tofu': 
                dLow = getStr(2); 
                d40 = getStr(1); 
                discard = getStr(0); 
                break;
            case 'egg': 
                dLow = getStr(6); 
                d40 = getStr(5); 
                discard = getStr(0); 
                break;
            case 'roasted': 
                dLow = getStr(3); // 20% (Modified from 25%)
                d40 = getStr(2); 
                discard = getStr(0); 
                break;
            case 'stevia': 
                dLow = getStr(3); 
                d40 = `${getStr(0)}~${getStr(2)}`; 
                discard = getStr(-1); 
                break;
            case 'fish': 
                dLow = getStr(1); 
                d40 = getStr(0); 
                discard = getStr(-1); 
                break;
            case 'meat': 
                dLow = getStr(2); 
                d40 = `${getStr(0)}~${getStr(1)}`; 
                discard = getStr(-1); 
                break;
        }
        return { low: dLow, d40: d40, discard: discard };
    }

    function render(id, data) {
        // Updated to search for 20% ID specifically for roasted
        const elLow = document.getElementById(`date-20-${id}`);
        const el40 = document.getElementById(`date-40-${id}`);
        const elDisc = document.getElementById(`date-discard-${id}`);
        if (elLow) elLow.textContent = data.low;
        if (el40) el40.textContent = data.d40;
        if (elDisc) elDisc.textContent = data.discard;
    }
});
