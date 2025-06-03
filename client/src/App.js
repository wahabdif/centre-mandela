import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { services } from '@/lib/data/services';
import { useTranslation } from 'react-i18next';
const Services = () => {
    const { t, i18n } = useTranslation();
    return (_jsxs("section", { className: "py-12 px-4 max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-3xl font-bold text-center mb-10", children: t('services.title', 'Nos Services') }), _jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: services.map(service => (_jsxs("div", { className: "border rounded-lg shadow hover:shadow-lg transition bg-white overflow-hidden", children: [_jsx("img", { src: service.image, alt: service.title, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h2", { className: "text-xl font-semibold mb-2", children: t(`services.items.${service.id}.title`, service.title) }), _jsx("p", { className: "text-gray-600 text-sm", children: t(`services.items.${service.id}.description`, '') })] })] }, service.id))) })] }));
};
export default Services;
//# sourceMappingURL=App.js.map