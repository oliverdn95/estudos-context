import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";

export function Home() {

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return (
  <div id="home" className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint temporibus aliquid deleniti dignissimos nulla, optio voluptatibus atque a quisquam sequi nostrum, exercitationem similique pariatur fuga quam, voluptatum esse? Eum et molestiae eveniet unde architecto consequatur soluta, cumque praesentium neque beatae nulla illum dolorem delectus non aliquam amet vitae hic doloribus fuga animi earum eos! Nihil distinctio, voluptas id excepturi reprehenderit aut adipisci quis provident ratione odio facilis accusantium illo in quidem illum autem vero iure similique, praesentium totam iusto placeat nam veniam cupiditate? Qui error neque consequatur adipisci vero repellat soluta, unde aperiam deserunt et dolorem nihil ab, nobis dolor eveniet sapiente quam iusto molestiae ea voluptates tenetur ipsam hic sed mollitia? Reprehenderit architecto asperiores vero sapiente corrupti, aut perferendis voluptates perspiciatis. Obcaecati quasi quas vero ab error a voluptate. Voluptate provident officia sequi expedita dolorem, culpa id? Tenetur sit aliquam voluptatibus hic esse. Asperiores quis harum nemo dolore earum saepe doloremque repellat, error delectus nam maiores cum non eaque, esse placeat. Ducimus fugit esse quam blanditiis excepturi voluptate nam culpa, adipisci ipsum consectetur veritatis beatae nobis qui. Ea alias obcaecati, sed, praesentium hic aut, vero accusantium voluptates animi ratione necessitatibus cum consequuntur a aspernatur dolore perspiciatis qui magni laborum minus. Facere neque hic perferendis architecto tempora nostrum necessitatibus, minus itaque voluptas accusantium est veritatis nihil vel eum at, libero, corporis fuga possimus? Nostrum, magni soluta? Obcaecati laboriosam ullam rerum odit est aspernatur ut consequatur, rem nulla, velit excepturi at voluptates aut cum dignissimos perspiciatis assumenda sint alias deserunt. Nulla deleniti excepturi quidem ipsum obcaecati deserunt esse harum, exercitationem ullam vitae. Iste nesciunt repudiandae quasi provident corrupti fugit temporibus eum laboriosam consectetur id ratione magnam quia earum, odit ipsa vel aliquid vero, maiores distinctio assumenda omnis. Quaerat sunt animi magnam inventore numquam molestiae, quas fugit. Voluptas perspiciatis ut explicabo?</p>
  </div>
  );
}
