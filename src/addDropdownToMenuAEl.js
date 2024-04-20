function createDropdown(contentArray) {
  const ul = document.createElement("ul");
  contentArray.forEach((itemObj) => {
    const list = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", itemObj.url);
    link.textContent = itemObj.title;
    list.appendChild(link);
    ul.appendChild(list);
  });
  return ul;
}

export function addDropdownToEachMenuAEl(menuConfigurations) {
  menuConfigurations.forEach(({ menuId, contentArray }) => {
    const dropdown = createDropdown(contentArray);
    const aEl = document.querySelector(menuId);
    if (aEl) {
      aEl.after(dropdown);
    } else {
      console.error(`Menu element not found for ID ${menuId}`);
    }
  });
}
