import {useState, useMemo} from "react";
import {useRouter} from '@/components/hooks/use-custom-router';
import {useAuthStore} from "@/store/use-auth-store";
import {useSettingStore} from "@/store/use-setting-store";
import IconLogo from "@/components/icons/icon-logo";
import useAlertStore from '@/store/use-alert-store';

const Header = () => {
  const auth = useAuthStore();
  const setting = useSettingStore();
  const alert = useAlertStore();
  const router = useRouter();

  // 메뉴 리스트를 useMemo로 저장 (Vue의 computed 대체)
  const menuList = useMemo(() => auth.menuList, [auth.menuList]);
  const favList = useMemo(() => setting.favList, [setting.favList]);

  // 상태 관리 (Vue의 reactive 대체)
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchList, setSearchList] = useState<any[]>([]);

  // 검색 기능
  const menuSearch = () => {
    const keyword = searchKeyword.trim().toLowerCase();
    if (keyword) {
      setSearchList(
        menuList.flatMap((group: any) => group.menu).filter((menu: any) =>
          menu.menuName.toLowerCase().includes(keyword)
        )
      );
    } else {
      setSearchList([]);
    }
  };

  // 즐겨찾기 추가/삭제
  const toggleFav = (menu: any) => {
    const updatedFavList = setting.favList.some((fav: any) => fav.menuId === menu.menuId)
      ? setting.favList.filter((fav: any) => fav.menuId !== menu.menuId)
      : [...setting.favList, menu];
    setting.setFavList(updatedFavList); // 상태 업데이트
  };

  // 모든 즐겨찾기 삭제
  const closeAll = () => {
    alert.show({
      message: <p>즐겨찾기를 모두 지우시겠습니까?</p>,
      button: [
        {type: 'on', rate: 6, text: '확인', callback: async () => {
            alert.hide();
            setting.setFavList([]);
          }
        },
        {type: 'off', rate: 4, text: '취소', callback: async () => {
            alert.hide();
          }
        },
      ]
    });
  };

  // 메뉴 열기/닫기
  const toggleMenu = () => {
    setting.setMenuActive(!setting.menuActive);
  };

  // 메뉴 클릭 시 이동
  const clickMenu = (menu: any) => {
    setting.path = menu.path;
    router.push({
      pathname: menu.path,
      query: {}
    });
  };

  // 홈 버튼 클릭
  const clickHome = () => {
    setting.path = '/';
    router.push({
      pathname: '/',
      query: {}
    });
  };

  // 즐겨찾기 클릭
  const clickFav = (fav: any) => {
    setting.path = fav.path;
    router.push({
      pathname: fav.path,
      query: {}
    });
  };

  return (
    <>
      {/* 헤더 */}
      <div id="header" className={setting.menuActive ? 'menuOn' : ''}>
        <div className="btnMenu" onClick={toggleMenu}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <ul className="userInfo">
          <li className="name">
            <b>
              <span className="icon user">&#xe809;</span>
              {auth.userInfo.userName}님
            </b>
          </li>
          <li className="btn">
            <u onClick={() => auth.logout()} style={{cursor: "pointer"}}>
              로그아웃
            </u>
          </li>
        </ul>

        <div className="tab">
          <ul>
            <li className={setting.path === "/" ? "active" : ""}>
              <span className="icon home" onClick={clickHome}>
                &#xe819;
              </span>
            </li>
            {setting.favList.map((fav: any) => (
              <li key={fav.menuId} className={setting.path === fav.path ? "active" : ""}>
                <span className="name" onClick={() => clickFav(fav)}>{fav.menuName}</span>
                <span className="icon close" onClick={() => toggleFav(fav)}>&#xe042;</span>
              </li>
            ))}
          </ul>
          <span className="icon closeAll" onClick={closeAll}>
            &#xe0de;
          </span>
        </div>
      </div>

      {/* 사이드바 */}
      <div id="side" className={setting.menuActive ? 'menuOn' : ''}>
        <h1 onClick={clickHome}>
          <IconLogo width={100} color={'#999'}/>
        </h1>
        <div className="search">
          <input
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onInput={menuSearch}
            placeholder="메뉴 검색"
          />
        </div>
        <div className="wrap">
          {searchList.length > 0 ? (
            <ul>
              {searchList.map((menu, idx) => (
                <li key={idx} className={`menu ${menu.active ? "on" : ""}`}>
                  <span className="icon pre" dangerouslySetInnerHTML={{__html: menu.icon}}></span>
                  <span className="name" onClick={() => clickMenu(menu)}>{menu.menuName}</span>
                  <span className={`icon fav ${menu.fav ? "on" : ""}`} onClick={() => toggleFav(menu)}>&#xe807;</span>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {menuList.map((menu, idx) => (
                <li key={idx} className={`menu ${menu.active ? "on" : ""}`}>
                  <span className="icon pre" dangerouslySetInnerHTML={{__html: menu.icon}}></span>
                  <span className="name" onClick={() => clickMenu(menu)}>{menu.menuName}</span>
                  <span className={`icon fav ${menu.fav ? "on" : ""}`} onClick={() => toggleFav(menu)}>&#xe807;</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
