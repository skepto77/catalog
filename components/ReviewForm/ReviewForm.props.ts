@@ -0,0 +1,5 @@
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	productId: string;
} 