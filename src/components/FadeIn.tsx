import React, {
    JSXElementConstructor,
    PropsWithChildren,
    useEffect,
    useState,
} from "react";

interface Props {
    delay?: number;
    transitionDuration?: number;
    wrapperTag?: JSXElementConstructor<any>;
    childTag?: JSXElementConstructor<any>;
    className?: string;
    childClassName?: string;
    visible?: boolean;
    onComplete?: () => any;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
    // Desestrutura as props
    const {
        children,
        delay = 50,
        transitionDuration = 400,
        wrapperTag: WrapperTag = "div",
        childTag: ChildTag = "div",
        className,
        childClassName,
        visible = true,
        onComplete,
    } = props;

    // CORREÇÃO: Inicializa o estado com o valor correto desde o início.
    // A função no useState garante que `window` só seja acessado no cliente.
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 768;
        }
        return false;
    });

    const [maxIsVisible, setMaxIsVisible] = useState(isMobile ? React.Children.count(children) : 0);

    // Hook para atualizar o estado se o usuário redimensionar a tela
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const childrenCount = React.Children.count(children);

    useEffect(() => {
        if (isMobile) {
            setMaxIsVisible(childrenCount);
            return;
        }

        let count = childrenCount;
        if (!visible) {
            count = 0;
        }

        if (count === maxIsVisible) {
            const timeout = setTimeout(() => {
                if (onComplete) onComplete();
            }, transitionDuration);
            return () => clearTimeout(timeout);
        }

        const increment = count > maxIsVisible ? 1 : -1;
        const timeout = setTimeout(() => {
            setMaxIsVisible(maxIsVisible + increment);
        }, delay);

        return () => clearTimeout(timeout);
    }, [
        childrenCount,
        delay,
        maxIsVisible,
        visible,
        transitionDuration,
        isMobile,
        onComplete,
    ]);

    return (
        <WrapperTag className={className}>
            {React.Children.map(children, (child, i) => {
                const style = isMobile ? {
                    transition: 'none',
                    transform: 'none',
                    opacity: 1,
                } : {
                    transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
                    transform: maxIsVisible > i ? "none" : "translateY(20px)",
                    opacity: maxIsVisible > i ? 1 : 0,
                };

                return (
                    <ChildTag
                        className={childClassName}
                        style={style}
                    >
                        {child}
                    </ChildTag>
                );
            })}
        </WrapperTag>
    );
}
