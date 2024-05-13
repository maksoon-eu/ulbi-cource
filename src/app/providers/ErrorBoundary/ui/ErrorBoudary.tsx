import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { PageError } from "widgets/PageError/ui/PageError";

interface ErrorBoudaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoudaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoudaryProps) {
        super(props);
        this.state = { 
            hasError: false 
        };
    }
  
    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }
  
    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info);
    }
  
    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }
    
        return children; 
    }
}

export default ErrorBoundary;