const menus = [
    { name: "삼겹살",      emoji: "🥓", cat: "한식",      msg: "오늘은 삼겹살이다! 소주 한 잔 어때요? 🍶" },                                                                                               
    { name: "된장찌개",    emoji: "🍲", cat: "한식",      msg: "집밥의 정석! 건강한 하루 되세요 💪" },                                                                                                     
    { name: "비빔밥",      emoji: "🥗", cat: "한식",      msg: "쓱쓱 비벼 먹는 비빔밥! 참기름 듬뿍!" },                                                                                                   
    { name: "김치찌개",    emoji: "🌶️ ", cat: "한식",      msg: "얼큰한 김치찌개로 기운 충전!" },                                                                                                         
    { name: "불고기",      emoji: "🥩", cat: "한식",      msg: "달콤한 불고기 한 접시!" },                                                                                                                
    { name: "갈비탕",      emoji: "🍖", cat: "한식",      msg: "진한 갈비탕으로 속을 든든하게!" },                                                                                                        
    { name: "냉면",        emoji: "🍜", cat: "한식",      msg: "시원한 냉면 한 그릇 어때요?" },                                                                                                           
    { name: "삼계탕",      emoji: "🍗", cat: "한식",      msg: "보양식의 왕! 삼계탕으로 원기 회복!" },                                                                                                    
    { name: "설렁탕",      emoji: "🥣", cat: "한식",      msg: "구수한 설렁탕 한 그릇!" },                                                                                                                
    { name: "잡채",        emoji: "🍝", cat: "한식",      msg: "쫄깃한 잡채로 맛있는 한 끼!" },                                                                                                           
    { name: "짜장면",      emoji: "🍜", cat: "중식",      msg: "검은 춘장의 매력! 단무지와 함께~" },                                                                                                      
    { name: "짬뽕",        emoji: "🌊", cat: "중식",      msg: "얼큰한 짬뽕! 해물 가득 국물까지 싹!" },                                                                                                   
    { name: "탕수육",      emoji: "🍖", cat: "중식",      msg: "바삭한 탕수육! 부먹 vs 찍먹?" },                                                                                                          
    { name: "마라탕",      emoji: "🌶️ ", cat: "중식",      msg: "중독적인 마라향! 땀 뻘뻘 흘릴 준비 되셨나요?" },                                                                                         
    { name: "만두",        emoji: "🥟", cat: "중식",      msg: "쫄깃한 만두 한 판!" },                                                                                                                    
    { name: "볶음밥",      emoji: "🍚", cat: "중식",      msg: "고소한 중식 볶음밥!" },                                                                                                                   
    { name: "초밥",        emoji: "🍣", cat: "일식",      msg: "신선한 초밥 한 판! 간장 살짝~" },                                                                                                         
    { name: "라멘",        emoji: "🍜", cat: "일식",      msg: "진한 국물의 라멘! 면발이 최고야" },                                                                                                       
    { name: "돈카츠",      emoji: "🥩", cat: "일식",      msg: "바삭한 돈카츠에 소스 듬뿍!" },                                                                                                            
    { name: "우동",        emoji: "🍜", cat: "일식",      msg: "따뜻한 우동 한 그릇으로 힐링~" },                                                                                                        ─
    { name: "규동",        emoji: "🥩", cat: "일식",      msg: "달달한 소고기 덮밥!" },                                                                                                                   
    { name: "오코노미야키", emoji: "🥞", cat: "일식",     msg: "일본식 부침개! 마요네즈 필수!" },                                                                                                         
    { name: "파스타",      emoji: "🍝", cat: "양식",      msg: "알덴테로 삶은 파스타 한 접시!" },                                                                                                         
    { name: "스테이크",    emoji: "🥩", cat: "양식",      msg: "오늘은 스테이크 데이! 미디엄 레어로!" },                                                                                                  
    { name: "피자",        emoji: "🍕", cat: "양식",      msg: "치즈 듬뿍 피자! 나눠 먹어요~" },                                                                                                          
    { name: "리조또",      emoji: "🍚", cat: "양식",      msg: "크리미한 리조또 한 그릇!" },                                                                                                              
    { name: "샐러드",      emoji: "🥗", cat: "양식",      msg: "건강한 샐러드로 가볍게!" },                                                                                                               
    { name: "떡볶이",      emoji: "🌶️ ", cat: "분식",      msg: "국민 간식 떡볶이! 매콤달콤하게!" },                                                                                                      
    { name: "순대국밥",    emoji: "🍲", cat: "분식",      msg: "든든한 순대국밥 한 그릇!" },                                                                                                              
    { name: "김밥",        emoji: "🍙", cat: "분식",      msg: "참기름 향 솔솔 김밥 한 줄!" },                                                                                                            
    { name: "라면",        emoji: "🍜", cat: "분식",      msg: "국민 라면! 계란 하나 추가!" },                                                                                                            
    { name: "튀김",        emoji: "🍤", cat: "분식",      msg: "바삭한 튀김 한 봉지!" },                                                                                                                  
    { name: "핫도그",      emoji: "🌭", cat: "분식",      msg: "길거리 핫도그 맛있겠다!" },                                                                                                              ─
    { name: "햄버거",      emoji: "🍔", cat: "패스트푸드", msg: "두툼한 패티의 햄버거!" },                                                                                                                
    { name: "치킨",        emoji: "🍗", cat: "패스트푸드", msg: "오늘은 치킨이다! 양념 vs 후라이드?" },                                                                                                   
    { name: "핫윙",        emoji: "🌶️ ", cat: "패스트푸드", msg: "매콤한 핫윙! 맥주도 한 잔~" },                                                                                                          
    { name: "타코",        emoji: "🌮", cat: "패스트푸드", msg: "이국적인 타코 한 입!" },                                                                                                                ─
    { name: "샌드위치",    emoji: "🥪", cat: "패스트푸드", msg: "든든한 샌드위치 한 판!" },                                                                                                               
  ];                                                                                                                                                                                                     
                  
  let selectedCat = "all";                                                                                                                                                                               
  let history = [];
  let isSpinning = false;                                                                                                                                                                                
                  
  function selectCategory(btn) {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCat = btn.dataset.cat;
  }                                                                                                                                                                                                      
   
  function getFiltered() {                                                                                                                                                                               
    return menus.filter(m => m.cat === selectedCat);
  }                                                 
   
  function pickMenu() {
    if (isSpinning) return;
    const filtered = getFiltered();
    if (filtered.length === 0) return;                                                                                                                                                                   
                                      
    isSpinning = true;                                                                                                                                                                                   
    const btn = document.getElementById('spinBtn');
    btn.classList.add('spinning');                 
    btn.disabled = true;          
                        
    const box = document.getElementById('resultBox');                                                                                                                                                    
    box.classList.remove('revealed');                
                                                                                                                                                                                                         
    let count = 0;
    const maxRolls = 18;
    const interval = setInterval(() => {
      const rand = filtered[Math.floor(Math.random() * filtered.length)];
      box.innerHTML = `<span class="rolling-text">${rand.emoji} ${rand.name}</span>`;
      count++;                                                                                                                                                                                           
      if (count >= maxRolls) {
        clearInterval(interval);                                                                                                                                                                         
        const chosen = filtered[Math.floor(Math.random() * filtered.length)];
        showResult(chosen);                                                                                                                                                                              
        btn.classList.remove('spinning');
        btn.disabled = false;                                                                                                                                                                            
        isSpinning = false;  
      }                    
    }, 80);
  }        
                                                                                                                                                                                                         
  function showResult(menu) {
    const box = document.getElementById('resultBox');                                                                                                                                                    
    box.classList.add('revealed');                   
    box.innerHTML = `             
      <div class="result-emoji">${menu.emoji}</div>
      <div class="result-name">${menu.name}</div>  
      <div class="result-category">${menu.cat}</div>
      <p class="lucky-msg">${menu.msg}</p>                                                                                                                                                               
    `;                                    
                                                                                                                                                                                                         
    history.unshift(menu.name);
    if (history.length > 6) history.pop();
    updateHistory();                      
  }                                                                                                                                                                                                      
   
  function updateHistory() {                                                                                                                                                                             
    const section = document.getElementById('historySection');
    const list = document.getElementById('historyList');      
    section.style.display = 'block';                    
    list.innerHTML = history.map(h => `<span class="history-tag">${h}</span>`).join('');
  }