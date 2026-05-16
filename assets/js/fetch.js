function createContent(item) {
    // tag,text,childrenを除いた「残りの属性(id,hrf,hrefなど)」を attrs に纏める
    const { tag, text, children, id, type, class: className, for: htmlFor, href, src, art, target, url, ...attrs} = item;
    const el = document.createElement(tag);

    Object.assign(el, attrs);
    if (id) el.id = id;
    // jsにおいてclassやforは仕様上使い回されるオブジェクトであるため 
    // class: classNameに変換 / for: htmlForに変換
    if (className) el.className = className;
    if (htmlFor) el.htmlFor = htmlFor;
    if (type) el.type = type;
    if (href) el.href = href;
    
    // テキストがあれば挿入
    if(text) el.textContent = text;

    if(children) {
        children.forEach(child => el.append(createContent(child)));
    }
    return el;
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const configResponse = await fetch ('./assets/data/api.json');
        if (!configResponse.ok) throw new Error ('Config load failed');
        const config = await configResponse.json();

        // JSON "parts": の設定通りにforEachで処理
        config.parts.forEach(part => {
        
            // #sidebar から[#]を消してID名に変換
            const contentContainerId = part.id.replace('#', '');
            const container = document.getElementById(contentContainerId);

            //part.id に対応するデータ(例: "sidebar" = "sideContent")を推測して取得
            const dataKey = part.dataKey;
            let dataList = config[dataKey];

            if (container && dataList) {
                dataList.forEach(data => container.appendChild(createContent(data)));
            }

        });

    } catch (e) {
        console.error(e);
    }
});