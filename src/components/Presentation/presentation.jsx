import profil from "../../assets/profil.jpg"
import "../Presentation/presentation.css"

function Presentation () {
return(
<div className="presentation-container">
    <div className="presentation-texte">
        <div className="presentation-title">
            <h1>Derrière Laulie Web se cache Leslie.</h1>
        </div>
        <div className="presentation-info">
            <p>Je suis Leslie , une passionnée de développement web doté d'une solide expérience de 15 ans dans le monde du rugby, un sport qui m'a inculqué des valeurs d'équipe, de discipline et de persévérance. Aujourd'hui, je mets cette passion et cet esprit d'équipe au service du développement web.Mon expérience dans le rugby m'a enseigné l'importance de la communication et de la collaboration. Je suis convaincu que ces compétences sont essentielles pour comprendre les besoins des clients et les accompagner dans le développement de leur visibilité en ligne. Mon objectif est d'être au plus près des clients, d'écouter attentivement leurs exigences et de travailler en étroite collaboration pour garantir des résultats qui dépassent leurs attentes.Ma passion pour le développement web va au-delà du simple codage. Je suis motivé par la possibilité de résoudre des problèmes complexes, d'innover et d'aider les clients à atteindre leurs objectifs en ligne. Mon approche proactive et ma capacité à rester à la pointe des dernières tendances technologiques me permettent d'offrir des solutions web modernes et performantes.

En résumé, je suis un développeur web déterminé, doté d'un esprit d'équipe forgé sur le terrain de rugby, prêt à relever les défis et à contribuer au succès de vos projets web. Si vous recherchez un professionnel engagé, compétent et orienté client, je serais ravi de discuter de la manière dont je peux être une valeur ajoutée pour votre équipe. </p>
        </div>
    </div>
    <div className="presentation-img">
        <img src={profil} alt="site internet tourcoing"></img>
    </div>
</div>
)
}
export default Presentation