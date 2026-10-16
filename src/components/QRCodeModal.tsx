import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { X, Download, Printer, Copy, Check } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  productionTitle: string;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  isOpen,
  onClose,
  productionTitle
}) => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && canvasRef.current && currentUrl) {
      QRCode.toCanvas(
        canvasRef.current,
        currentUrl,
        {
          width: 240,
          margin: 1.5,
          color: {
            dark: '#1C2127',
            light: '#FFFFFF'
          }
        },
        (error) => {
          if (error) console.error('QR code generation error:', error);
        }
      );
    }
  }, [isOpen, currentUrl]);

  if (!isOpen) return null;

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleDownloadQrPng = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `${productionTitle}_QR.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const handlePrintFlyer = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] text-stone-900 border border-stone-300 w-full max-w-lg rounded-sm shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-100 border-b border-stone-200 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-stone-900">
              온라인 접속용 QR코드 안내
            </h3>
            <p className="text-xs text-stone-500">
              관객이 모바일 기기로 스캔하여 바로 접속하는 전자 프로그램북
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-500 hover:text-stone-900 rounded"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* QR Display Frame */}
          <div className="flex flex-col items-center justify-center p-6 bg-white border border-stone-200 rounded">
            <canvas ref={canvasRef} className="shadow-xs" />
            <p className="mt-3 text-xs font-semibold text-stone-500 text-center">
              스마트폰 카메라로 QR 코드를 스캔하면 해당 페이지로 즉시 연결됩니다.
            </p>
          </div>

          {/* Current URL bar */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              접속 대상 URL 주소
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentUrl}
                onChange={(e) => setCurrentUrl(e.target.value)}
                className="flex-1 px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded font-mono text-stone-800 focus:outline-none focus:border-stone-600"
                placeholder="https://..."
              />
              <button
                onClick={handleCopyUrl}
                className="px-3 py-2 text-xs font-bold bg-stone-200 hover:bg-stone-300 rounded flex items-center gap-1 shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '복사됨' : '복사'}</span>
              </button>
            </div>
          </div>

          {/* Hosting Guide Note */}
          <div className="bg-stone-100/80 p-4 border border-stone-200 text-xs text-stone-700 space-y-1.5">
            <div className="font-bold text-stone-900 flex items-center gap-1.5">
              <span>💡 별도의 유료 호스팅 없이 운영하는 방법</span>
            </div>
            <p className="text-justified">
              1. <strong>GitHub Pages 무료 배포</strong>: 함께 생성된 GitHub CI/CD 워크플로우를 통하여 비용 없이 GitHub에 무료 웹 호스팅할 수 있습니다.
            </p>
            <p className="text-justified">
              2. <strong>독립 HTML 단일 파일</strong>: 상단의 [단일 HTML 내보내기]를 누르면 브라우저만 있으면 오프라인에서도 열리는 self-contained 파일로 저장됩니다.
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex flex-wrap gap-2 justify-end">
          <button
            onClick={handleDownloadQrPng}
            className="px-3.5 py-2 text-xs font-semibold bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 rounded flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>QR 이미지 저장 (PNG)</span>
          </button>
          <button
            onClick={handlePrintFlyer}
            className="px-3.5 py-2 text-xs font-semibold bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 rounded flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>안내장 인쇄</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold bg-stone-900 hover:bg-stone-800 text-white rounded"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
