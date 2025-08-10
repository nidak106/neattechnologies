import { create } from 'zustand';

const useStore = create((set) => ({
  // Navigation state
  isMobileMenuOpen: false,
  isServicesDropdownOpen: false,
  
  // Form state
  contactForm: {
    name: '',
    email: '',
    message: ''
  },
  
  // Actions
  toggleMobileMenu: () => set((state) => ({ 
    isMobileMenuOpen: !state.isMobileMenuOpen 
  })),
  
  setMobileMenu: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  
  toggleServicesDropdown: () => set((state) => ({ 
    isServicesDropdownOpen: !state.isServicesDropdownOpen 
  })),
  
  setServicesDropdown: (isOpen) => set({ isServicesDropdownOpen: isOpen }),
  
  updateContactForm: (field, value) => set((state) => ({
    contactForm: {
      ...state.contactForm,
      [field]: value
    }
  })),
  
  resetContactForm: () => set({
    contactForm: {
      name: '',
      email: '',
      message: ''
    }
  }),
}));

export default useStore;