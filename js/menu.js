function menu(){
    var menubar = document.getElementById('menubar');
    menubar.innerHTML = `
    <span id="menu_on">
      <a href=""><img src="../img/menubtn.png" class="menubtn"></a>
      <ul style="margin-top: 70px">
        <li><a href="view_rune.html">룬 정보</a></li>
        <li><a href="view_item.html">아이템 정보</a></li>
          <ul>
            <li><a href="view_set.html">세트 아이템</a></li>
            <li><a href="view_unique.html">유니크 아이템</a></li>
            <li><a href="view_runewords.html">룬워드 아이템</a></li>
          </ul>
        </li>
        <li><a href="view_gem.html">보석 정보</a></li>
        <li><a href="">등등2</a></li>
      </ul>
    </span>
    `;
}
