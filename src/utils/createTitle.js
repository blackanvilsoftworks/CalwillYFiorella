export const createTitle = (title, icon) => {
    return `
        <span class="titles">
            ${title}
            <i class="${icon}"></i>
        </span>
    `;
};
