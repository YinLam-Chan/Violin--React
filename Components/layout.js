import header from "./header";
import navbar from "./navbar";

const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
}

const contentStyle = {
    display: "flex",
    flexDirection: "column"
}

const layout = props => (
    <div className="Layout" style={layoutStyle}>
        <header />
        <navbar />
        <div className="Content" style={contentStyle}>
            {props.children}
        </div>
    </div>
);

export default layout;