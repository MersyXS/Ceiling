<?php
if (isset($_GET['width']) AND isset($_GET['height'])) {
  // выводим переменные с размерами
  echo "Ширина экрана: ". $_GET['width'] ."<br />\n";
  echo "Высота экрана: ". $_GET['height'] ."<br />\n";
} else {
  // передаём переменные с размерами
  // (сохраняем оригинальную строку запроса
  //   -- post переменные нужно будет передавать другим способом)

  echo "<script language='javascript'>\n";
  echo "  location.href=\"${_SERVER['SCRIPT_NAME']}?${_SERVER['QUERY_STRING']}"
            . "&width=\" + screen.width + \"&height=\" + screen.height;\n";
  echo "</script>\n";
  exit();
}
?>