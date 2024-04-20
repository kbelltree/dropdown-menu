let displayedDropdown = null;

function closeDropdown() {
  if (displayedDropdown) {
    displayedDropdown.classList.remove("is-active");
    displayedDropdown = null;
  }
}

function showDropdown(dropdownUl) {
  closeDropdown();
  dropdownUl.classList.add("is-active");
  displayedDropdown = dropdownUl;
}

function toggleDropdown(dropdownUl) {
  if (displayedDropdown === dropdownUl) {
    closeDropdown();
  } else {
    showDropdown(dropdownUl);
  }
}

function addDropdownEffect(e) {
  if (e.target.matches(".k-bell-dropdown")) {
    const dropdownUl = e.target.nextElementSibling;
    if (dropdownUl && dropdownUl.tagName === "UL") {
      e.preventDefault();
      toggleDropdown(dropdownUl);
    }
  } else {
    closeDropdown();
  }
}

export function attachDropdownEffectOnLoad() {
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => addDropdownEffect(e));
  });
}
