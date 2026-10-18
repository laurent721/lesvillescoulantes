import React, { useState } from 'react';
import { ProgramBookContent } from '../types/content';
import { X, RotateCcw, Save, Check, FileDown, Plus, Trash2 } from 'lucide-react';
import { defaultProgramContent } from '../data/defaultContent';

interface ContentEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ProgramBookContent;
  onSaveContent: (newContent: ProgramBookContent) => void;
  onDownloadHtml: () => void;
}

export const ContentEditorModal: React.FC<ContentEditorModalProps> = ({
  isOpen,
  onClose,
  content,
  onSaveContent,
  onDownloadHtml
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'schedule' | 'directions' | 'producer' | 'dramaturg' | 'notices'>('overview');
  const [formData, setFormData] = useState<ProgramBookContent>(JSON.parse(JSON.stringify(content)));
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveContent(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleResetToDefault = () => {
    if (confirm('모든 내용을 기본 예시 내용으로 초기화하시겠습니까?')) {
      const cloned = JSON.parse(JSON.stringify(defaultProgramContent));
      setFormData(cloned);
      onSaveContent(cloned);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] text-stone-900 border border-stone-300 w-full max-w-4xl h-[90vh] rounded-sm shadow-2xl flex flex-col overflow-hidden animate-in fade-in duration-150">
        {/* Editor Top Bar */}
        <div className="px-6 py-4 bg-stone-100 border-b border-stone-200 flex items-center justify-between shrink-0">
          <div>
            <h3 className="font-bold text-lg text-stone-900 flex items-center gap-2">
              <span>운영자 텍스트 편집기</span>
              {saveSuccess && (
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> 반영 완료!
                </span>
              )}
            </h3>
            <p className="text-xs text-stone-600">
              4개 카테고리의 텍스트를 자유롭게 수정하고 실시간으로 반영합니다.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="px-6 bg-stone-200/70 border-b border-stone-300 flex overflow-x-auto gap-2 shrink-0 text-xs sm:text-sm font-semibold text-stone-700">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-stone-900 text-stone-950 bg-stone-100/80 font-bold'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            1. 개요
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'schedule'
                ? 'border-stone-900 text-stone-950 bg-stone-100/80 font-bold'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            진행 순서
          </button>
          <button
            onClick={() => setActiveTab('directions')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'directions'
                ? 'border-stone-900 text-stone-950 bg-stone-100/80 font-bold'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            오시는 길
          </button>
          <button
            onClick={() => setActiveTab('producer')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'producer'
                ? 'border-stone-900 text-stone-950 bg-stone-100/80 font-bold'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            2. 제작자의 말
          </button>
          <button
            onClick={() => setActiveTab('dramaturg')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'dramaturg'
                ? 'border-stone-900 text-stone-950 bg-stone-100/80 font-bold'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            3. 드라마투르기의 말
          </button>
          <button
            onClick={() => setActiveTab('notices')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'notices'
                ? 'border-stone-900 text-stone-950 bg-stone-100/80 font-bold'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            4. 공연 안내
          </button>
        </div>

        {/* Editor Form Body (Scrollable) */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">공연 제목 (표제)</label>
                  <input
                    type="text"
                    value={formData.meta.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        meta: { ...formData.meta, title: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded font-medium focus:border-stone-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">부제 / 메인 카피</label>
                  <input
                    type="text"
                    value={formData.meta.subtitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        meta: { ...formData.meta, subtitle: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded font-medium focus:border-stone-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">공연 기간</label>
                  <input
                    type="text"
                    value={formData.meta.dates}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        meta: { ...formData.meta, dates: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">공연 장소</label>
                  <input
                    type="text"
                    value={formData.meta.venue}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        meta: { ...formData.meta, venue: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">러닝 타임</label>
                  <input
                    type="text"
                    value={formData.meta.runningTime}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        meta: { ...formData.meta, runningTime: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">인터미션 여부</label>
                  <input
                    type="text"
                    value={formData.meta.intermission}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        meta: { ...formData.meta, intermission: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">관람 등급</label>
                  <input
                    type="text"
                    value={formData.meta.ageRating}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        meta: { ...formData.meta, ageRating: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">예매</label>
                  <input
                    type="text"
                    value={formData.meta.ticketPrice}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        meta: { ...formData.meta, ticketPrice: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
              </div>

              {/* Synopsis editor */}
              <div className="pt-4 border-t border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-stone-700">시놉시스 단락들 (줄거리)</label>
                  <button
                    onClick={() =>
                      setFormData({
                        ...formData,
                        meta: {
                          ...formData.meta,
                          synopsis: [...(formData.meta.synopsis || []), '새로운 시놉시스 단락을 입력하세요.']
                        }
                      })
                    }
                    className="text-xs text-stone-700 hover:text-stone-900 font-bold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> 단락 추가
                  </button>
                </div>
                <div className="space-y-3">
                  {(formData.meta.synopsis || []).map((para, idx) => (
                    <div key={idx} className="flex gap-2">
                      <textarea
                        rows={3}
                        value={para}
                        onChange={(e) => {
                          const updated = [...(formData.meta.synopsis || [])];
                          updated[idx] = e.target.value;
                          setFormData({
                            ...formData,
                            meta: { ...formData.meta, synopsis: updated }
                          });
                        }}
                        className="flex-1 px-3 py-2 bg-white border border-stone-300 rounded leading-relaxed focus:border-stone-700 outline-none"
                      />
                      {(formData.meta.synopsis?.length ?? 0) > 1 && (
                        <button
                          onClick={() => {
                            const updated = (formData.meta.synopsis || []).filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              meta: { ...formData.meta, synopsis: updated }
                            });
                          }}
                          className="p-2 text-stone-400 hover:text-red-600 self-start"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Collective Norujumping Intro text */}
              <div className="pt-4 border-t border-stone-200">
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  콜렉티브 노루점핑 소개문 (문단 줄글)
                </label>
                <textarea
                  rows={3}
                  value={
                    typeof formData.meta.collectiveIntro === 'string'
                      ? formData.meta.collectiveIntro
                      : Array.isArray(formData.meta.collectiveIntro)
                      ? formData.meta.collectiveIntro.join('\n\n')
                      : ''
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      meta: { ...formData.meta, collectiveIntro: e.target.value }
                    })
                  }
                  placeholder="콜렉티브 노루점핑 소개 및 설명을 작성해 주세요."
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded leading-relaxed focus:border-stone-700 outline-none text-xs sm:text-sm"
                />
              </div>

              {/* Notice */}
              <div className="p-3 bg-stone-100 rounded text-xs text-stone-600">
                만든 사람들(제작진) 명단은 코드 내 <code className="font-mono text-stone-800">src/data/defaultContent.ts</code>에서 직접 수정 및 확장하실 수 있습니다.
              </div>
            </div>
          )}

          {/* TAB: SCHEDULE (진행 순서) */}
          {activeTab === 'schedule' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">섹션 제목</label>
                  <input
                    type="text"
                    value={formData.schedule?.heading || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schedule: {
                          heading: e.target.value,
                          note: formData.schedule?.note || '',
                          items: formData.schedule?.items || []
                        }
                      })
                    }
                    placeholder="공연 진행 순서"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">안내 문구 (유의사항)</label>
                  <input
                    type="text"
                    value={formData.schedule?.note || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schedule: {
                          heading: formData.schedule?.heading || '공연 진행',
                          note: e.target.value,
                          firstGroupLabel: formData.schedule?.firstGroupLabel,
                          firstGroupTime: formData.schedule?.firstGroupTime,
                          secondGroupLabel: formData.schedule?.secondGroupLabel,
                          secondGroupTime: formData.schedule?.secondGroupTime,
                          items: formData.schedule?.items || []
                        }
                      })
                    }
                    placeholder="※ 당일 현장 진행에 따라 유동적으로 운영될 수 있습니다."
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
              </div>

              {/* Group Labels and Times */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-stone-200">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">첫 번째 그룹 라벨</label>
                  <input
                    type="text"
                    value={formData.schedule?.firstGroupLabel || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schedule: {
                          ...formData.schedule!,
                          firstGroupLabel: e.target.value
                        }
                      })
                    }
                    placeholder="서울(26일 30일*) 부산(11일 12일 13일*)"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">첫 번째 개막시간</label>
                  <input
                    type="text"
                    value={formData.schedule?.firstGroupTime || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schedule: {
                          ...formData.schedule!,
                          firstGroupTime: e.target.value
                        }
                      })
                    }
                    placeholder="개막시간: 19:00"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">두 번째 그룹 라벨</label>
                  <input
                    type="text"
                    value={formData.schedule?.secondGroupLabel || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schedule: {
                          ...formData.schedule!,
                          secondGroupLabel: e.target.value
                        }
                      })
                    }
                    placeholder="서울(27일 28일 29일)"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">두 번째 개막시간</label>
                  <input
                    type="text"
                    value={formData.schedule?.secondGroupTime || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schedule: {
                          ...formData.schedule!,
                          secondGroupTime: e.target.value
                        }
                      })
                    }
                    placeholder="개막시간: 19:00"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none text-xs"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-stone-700 mb-1">하단 안내 텍스트박스 (흰색 박스)</label>
                  <input
                    type="text"
                    value={formData.schedule?.noticeBox || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schedule: {
                          ...formData.schedule!,
                          noticeBox: e.target.value
                        }
                      })
                    }
                    placeholder="퍼포먼스 2의 진행을 위해 관객 여러분께서는 뜨개실을 지참해 주세요. 뜨개실은 대바늘용으로, 길면 길수록 좋습니다."
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none text-xs"
                  />
                </div>
              </div>

              {/* Schedule items */}
              <div className="pt-4 border-t border-stone-200">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-stone-700">진행 순서 목록</label>
                  <button
                    onClick={() => {
                      const currentItems = formData.schedule?.items || [];
                      const newItem = {
                        step: String(currentItems.length + 1).padStart(2, '0'),
                        title: '새 진행 순서',
                        duration: '약 20분',
                        description: ''
                      };
                      setFormData({
                        ...formData,
                        schedule: {
                          heading: formData.schedule?.heading || '공연 진행 순서',
                          note: formData.schedule?.note,
                          items: [...currentItems, newItem]
                        }
                      });
                    }}
                    className="text-xs text-stone-700 hover:text-stone-900 font-bold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> 순서 추가
                  </button>
                </div>

                <div className="space-y-3">
                  {(formData.schedule?.items || []).map((item, idx) => (
                    <div key={idx} className="p-3 bg-white border border-stone-300 rounded space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item.step || ''}
                          onChange={(e) => {
                            const updated = [...(formData.schedule?.items || [])];
                            updated[idx] = { ...updated[idx], step: e.target.value };
                            setFormData({
                              ...formData,
                              schedule: { ...formData.schedule!, items: updated }
                            });
                          }}
                          placeholder="순서 (01)"
                          className="w-20 px-2 py-1 bg-stone-50 border border-stone-300 rounded text-xs"
                        />
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => {
                            const updated = [...(formData.schedule?.items || [])];
                            updated[idx] = { ...updated[idx], title: e.target.value };
                            setFormData({
                              ...formData,
                              schedule: { ...formData.schedule!, items: updated }
                            });
                          }}
                          placeholder="순서 제목"
                          className="flex-1 px-2 py-1 bg-white border border-stone-300 rounded text-xs font-bold"
                        />
                        <input
                          type="text"
                          value={item.duration || ''}
                          onChange={(e) => {
                            const updated = [...(formData.schedule?.items || [])];
                            updated[idx] = { ...updated[idx], duration: e.target.value };
                            setFormData({
                              ...formData,
                              schedule: { ...formData.schedule!, items: updated }
                            });
                          }}
                          placeholder="소요 시간"
                          className="w-24 px-2 py-1 bg-stone-50 border border-stone-300 rounded text-xs"
                        />
                        {(formData.schedule?.items?.length ?? 0) > 1 && (
                          <button
                            onClick={() => {
                              const updated = (formData.schedule?.items || []).filter((_, i) => i !== idx);
                              setFormData({
                                ...formData,
                                schedule: { ...formData.schedule!, items: updated }
                              });
                            }}
                            className="p-1 text-stone-400 hover:text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        value={item.description || ''}
                        onChange={(e) => {
                          const updated = [...(formData.schedule?.items || [])];
                          updated[idx] = { ...updated[idx], description: e.target.value };
                          setFormData({
                            ...formData,
                            schedule: { ...formData.schedule!, items: updated }
                          });
                        }}
                        placeholder="상세 설명 (선택사항)"
                        className="w-full px-2 py-1 bg-stone-50 border border-stone-300 rounded text-xs text-stone-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: DIRECTIONS (오시는 길) */}
          {activeTab === 'directions' && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">섹션 제목</label>
                <input
                  type="text"
                  value={formData.directions?.heading || '오시는 길'}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      directions: {
                        heading: e.target.value,
                        venues: formData.directions?.venues || []
                      }
                    })
                  }
                  placeholder="오시는 길"
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none text-sm font-bold"
                />
              </div>

              {(formData.directions?.venues || []).map((venue, vIdx) => (
                <div key={vIdx} className="bg-white p-4 border border-stone-300 rounded space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      공연장 {vIdx + 1} 제목 (큰글자, 볼드)
                    </label>
                    <input
                      type="text"
                      value={venue.title}
                      onChange={(e) => {
                        const updated = [...(formData.directions?.venues || [])];
                        updated[vIdx] = { ...updated[vIdx], title: e.target.value };
                        setFormData({
                          ...formData,
                          directions: {
                            heading: formData.directions?.heading || '오시는 길',
                            venues: updated
                          }
                        });
                      }}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded text-sm font-extrabold text-stone-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">지하철 이용시</label>
                      <input
                        type="text"
                        value={venue.subway || ''}
                        onChange={(e) => {
                          const updated = [...(formData.directions?.venues || [])];
                          updated[vIdx] = { ...updated[vIdx], subway: e.target.value };
                          setFormData({
                            ...formData,
                            directions: {
                              heading: formData.directions?.heading || '오시는 길',
                              venues: updated
                            }
                          });
                        }}
                        placeholder="지하철 경로 안내"
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 rounded text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">버스 이용시</label>
                      <input
                        type="text"
                        value={venue.bus || ''}
                        onChange={(e) => {
                          const updated = [...(formData.directions?.venues || [])];
                          updated[vIdx] = { ...updated[vIdx], bus: e.target.value };
                          setFormData({
                            ...formData,
                            directions: {
                              heading: formData.directions?.heading || '오시는 길',
                              venues: updated
                            }
                          });
                        }}
                        placeholder="버스 경로 안내"
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 rounded text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">차량 이용시</label>
                      <input
                        type="text"
                        value={venue.car || ''}
                        onChange={(e) => {
                          const updated = [...(formData.directions?.venues || [])];
                          updated[vIdx] = { ...updated[vIdx], car: e.target.value };
                          setFormData({
                            ...formData,
                            directions: {
                              heading: formData.directions?.heading || '오시는 길',
                              venues: updated
                            }
                          });
                        }}
                        placeholder="차량 경로 안내"
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 rounded text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">택시 이용시</label>
                      <input
                        type="text"
                        value={venue.taxi || ''}
                        onChange={(e) => {
                          const updated = [...(formData.directions?.venues || [])];
                          updated[vIdx] = { ...updated[vIdx], taxi: e.target.value };
                          setFormData({
                            ...formData,
                            directions: {
                              heading: formData.directions?.heading || '오시는 길',
                              venues: updated
                            }
                          });
                        }}
                        placeholder="택시 경로 안내"
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 rounded text-xs"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: PRODUCER */}
          {activeTab === 'producer' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">직함 (예: 제작총괄 겸 연출)</label>
                  <input
                    type="text"
                    value={formData.producerNote.authorTitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        producerNote: { ...formData.producerNote, authorTitle: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">성명</label>
                  <input
                    type="text"
                    value={formData.producerNote.authorName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        producerNote: { ...formData.producerNote, authorName: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">글 제목</label>
                <input
                  type="text"
                  value={formData.producerNote.heading}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      producerNote: { ...formData.producerNote, heading: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded font-semibold focus:border-stone-700 outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-stone-700">본문 단락들</label>
                  <button
                    onClick={() =>
                      setFormData({
                        ...formData,
                        producerNote: {
                          ...formData.producerNote,
                          paragraphs: [...formData.producerNote.paragraphs, '새로운 본문 내용을 입력하세요.']
                        }
                      })
                    }
                    className="text-xs text-stone-700 hover:text-stone-900 font-bold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> 단락 추가
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.producerNote.paragraphs.map((p, idx) => (
                    <div key={idx} className="flex gap-2">
                      <textarea
                        rows={4}
                        value={p}
                        onChange={(e) => {
                          const updated = [...formData.producerNote.paragraphs];
                          updated[idx] = e.target.value;
                          setFormData({
                            ...formData,
                            producerNote: { ...formData.producerNote, paragraphs: updated }
                          });
                        }}
                        className="flex-1 px-3 py-2 bg-white border border-stone-300 rounded leading-relaxed focus:border-stone-700 outline-none"
                      />
                      {formData.producerNote.paragraphs.length > 1 && (
                        <button
                          onClick={() => {
                            const updated = formData.producerNote.paragraphs.filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              producerNote: { ...formData.producerNote, paragraphs: updated }
                            });
                          }}
                          className="p-2 text-stone-400 hover:text-red-600 self-start"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">맺음말 (서명)</label>
                <input
                  type="text"
                  value={formData.producerNote.closing}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      producerNote: { ...formData.producerNote, closing: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                />
              </div>
            </div>
          )}

          {/* TAB 3: DRAMATURG */}
          {activeTab === 'dramaturg' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">직함 (예: 드라마투르그)</label>
                  <input
                    type="text"
                    value={formData.dramaturgNote.authorTitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dramaturgNote: { ...formData.dramaturgNote, authorTitle: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">성명 및 이력</label>
                  <input
                    type="text"
                    value={formData.dramaturgNote.authorName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dramaturgNote: { ...formData.dramaturgNote, authorName: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">에세이 제목</label>
                <input
                  type="text"
                  value={formData.dramaturgNote.heading}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dramaturgNote: { ...formData.dramaturgNote, heading: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded font-semibold focus:border-stone-700 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">에세이 부제</label>
                <input
                  type="text"
                  value={formData.dramaturgNote.subheading}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dramaturgNote: { ...formData.dramaturgNote, subheading: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-stone-700">본문 비평 단락들</label>
                  <button
                    onClick={() =>
                      setFormData({
                        ...formData,
                        dramaturgNote: {
                          ...formData.dramaturgNote,
                          paragraphs: [...formData.dramaturgNote.paragraphs, '새로운 비평 단락을 입력하세요.']
                        }
                      })
                    }
                    className="text-xs text-stone-700 hover:text-stone-900 font-bold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> 단락 추가
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.dramaturgNote.paragraphs.map((p, idx) => (
                    <div key={idx} className="flex gap-2">
                      <textarea
                        rows={4}
                        value={p}
                        onChange={(e) => {
                          const updated = [...formData.dramaturgNote.paragraphs];
                          updated[idx] = e.target.value;
                          setFormData({
                            ...formData,
                            dramaturgNote: { ...formData.dramaturgNote, paragraphs: updated }
                          });
                        }}
                        className="flex-1 px-3 py-2 bg-white border border-stone-300 rounded leading-relaxed focus:border-stone-700 outline-none"
                      />
                      {formData.dramaturgNote.paragraphs.length > 1 && (
                        <button
                          onClick={() => {
                            const updated = formData.dramaturgNote.paragraphs.filter((_, i) => i !== idx);
                            setFormData({
                              ...formData,
                              dramaturgNote: { ...formData.dramaturgNote, paragraphs: updated }
                            });
                          }}
                          className="p-2 text-stone-400 hover:text-red-600 self-start"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">맺음말 / 작성 일자</label>
                <input
                  type="text"
                  value={formData.dramaturgNote.closing}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dramaturgNote: { ...formData.dramaturgNote, closing: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none"
                />
              </div>
            </div>
          )}

          {/* TAB 4: NOTICES */}
          {activeTab === 'notices' && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">섹션 제목</label>
                <input
                  type="text"
                  value={formData.notices.heading}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      notices: { ...formData.notices, heading: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded font-semibold focus:border-stone-700 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">안내 서두문 (리드 문구)</label>
                <textarea
                  rows={2}
                  value={formData.notices.lead}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      notices: { ...formData.notices, lead: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded leading-relaxed focus:border-stone-700 outline-none"
                />
              </div>

              <div className="space-y-4 pt-2 border-t border-stone-200">
                <div className="text-xs font-bold text-stone-700">유의사항 카테고리별 세부 항목</div>
                {formData.notices.categories.map((cat, catIdx) => (
                  <div key={catIdx} className="p-4 bg-white border border-stone-300 rounded space-y-2.5">
                    <input
                      type="text"
                      value={cat.categoryTitle}
                      onChange={(e) => {
                        const updatedCats = [...formData.notices.categories];
                        updatedCats[catIdx].categoryTitle = e.target.value;
                        setFormData({
                          ...formData,
                          notices: { ...formData.notices, categories: updatedCats }
                        });
                      }}
                      className="w-full px-2.5 py-1.5 font-bold bg-stone-50 border border-stone-200 rounded text-stone-900 focus:border-stone-700 outline-none"
                    />

                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const updatedCats = [...formData.notices.categories];
                            updatedCats[catIdx].items[itemIdx] = e.target.value;
                            setFormData({
                              ...formData,
                              notices: { ...formData.notices, categories: updatedCats }
                            });
                          }}
                          className="flex-1 px-2.5 py-1.5 text-xs sm:text-sm bg-white border border-stone-200 rounded focus:border-stone-700 outline-none"
                        />
                        {cat.items.length > 1 && (
                          <button
                            onClick={() => {
                              const updatedCats = [...formData.notices.categories];
                              updatedCats[catIdx].items = updatedCats[catIdx].items.filter((_, i) => i !== itemIdx);
                              setFormData({
                                ...formData,
                                notices: { ...formData.notices, categories: updatedCats }
                              });
                            }}
                            className="p-1 text-stone-400 hover:text-red-600"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const updatedCats = [...formData.notices.categories];
                        updatedCats[catIdx].items.push('새로운 유의사항 항목을 입력하세요.');
                        setFormData({
                          ...formData,
                          notices: { ...formData.notices, categories: updatedCats }
                        });
                      }}
                      className="text-xs text-stone-600 hover:text-stone-900 font-bold flex items-center gap-1 pt-1"
                    >
                      <Plus className="w-3 h-3" /> 항목 추가
                    </button>
                  </div>
                ))}
              </div>

              {/* Inquiry info */}
              <div className="pt-2 border-t border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">문의 전화</label>
                  <input
                    type="text"
                    value={formData.notices.inquiry.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        notices: {
                          ...formData.notices,
                          inquiry: { ...formData.notices.inquiry, phone: e.target.value }
                        }
                      })
                    }
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">문의 이메일</label>
                  <input
                    type="text"
                    value={formData.notices.inquiry.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        notices: {
                          ...formData.notices,
                          inquiry: { ...formData.notices.inquiry, email: e.target.value }
                        }
                      })
                    }
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">운영 시간</label>
                  <input
                    type="text"
                    value={formData.notices.inquiry.operatingHours}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        notices: {
                          ...formData.notices,
                          inquiry: { ...formData.notices.inquiry, operatingHours: e.target.value }
                        }
                      })
                    }
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded focus:border-stone-700 outline-none text-xs sm:text-sm"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Editor Bottom Actions */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex gap-2">
            <button
              onClick={handleResetToDefault}
              className="px-3 py-2 text-xs font-semibold bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 rounded flex items-center gap-1.5"
              title="초기 예시 텍스트로 복원"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>기본값 복원</span>
            </button>
            <button
              onClick={onDownloadHtml}
              className="px-3 py-2 text-xs font-semibold bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 rounded flex items-center gap-1.5"
              title="별도 호스팅 없이 브라우저에서 바로 열람 가능한 단일 HTML 파일 다운로드"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>단일 HTML 내보내기</span>
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 rounded"
            >
              취소
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 text-xs font-bold bg-stone-900 hover:bg-stone-800 text-white rounded flex items-center gap-1.5 shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>수정사항 즉시 적용</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
