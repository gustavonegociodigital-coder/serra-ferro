/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, BookOpen, Clock, Calendar, ChevronRight, User, Search, Share2, 
  Linkedin, Facebook, Twitter, MessageSquare, Send, Mail, Copy, Check, 
  Heart, Eye, Plus, Trash, Edit, Settings, Download, LayoutDashboard, 
  Rss, ArrowUp, ChevronDown, Globe, FileText, Sparkles, ExternalLink, ThumbsUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppView, BlogPost } from '../types';
import { BLOG_POSTS_RICH } from '../blogData';
import PlaceholderImage from './PlaceholderImage';

interface BlogProps {
  setView: (view: AppView) => void;
}

interface NewsletterSubscriber {
  id: string;
  name: string;
  email: string;
  platform: string;
  date: string;
}

export default function Blog({ setView }: BlogProps) {
  // Core State
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    // Carregar do localStorage se existir, senão usar os posts ricos padrão
    const saved = localStorage.getItem('serra_ferro_blog_posts');
    return saved ? JSON.parse(saved) : BLOG_POSTS_RICH;
  });

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Search and Filtering States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<'recent' | 'popular' | 'likes'>('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationMode, setPaginationMode] = useState<'traditional' | 'infinite'>('traditional');
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  // Transition / Skeleton Loading simulations
  const [isLoading, setIsLoading] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);

  // Active section for reading TOC
  const [activeTocSection, setActiveTocSection] = useState<string>('');

  // Newsletter subscription states
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterPlatform, setNewsletterPlatform] = useState('RD Station');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>(() => {
    const saved = localStorage.getItem('serra_ferro_newsletter_subscribers');
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'Ana Carolina Lima', email: 'ana.lima@arquitetura.com.br', platform: 'RD Station', date: '2026-06-25T14:30:00.000Z' },
      { id: '2', name: 'Eng. Roberto Guedes', email: 'roberto@guedeseng.com', platform: 'Mailchimp', date: '2026-06-27T09:15:00.000Z' }
    ];
  });

  // Share link feedback toast
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Local comments draft
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  // FAQ Expand state for the active article
  const [expandedFaqs, setExpandedFaqs] = useState<Record<string, boolean>>({});

  // Reading progress scroll state
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Administration view states
  const [adminMode, setAdminMode] = useState(false);
  const [adminTab, setAdminTab] = useState<'articles' | 'subscribers' | 'settings'>('articles');
  
  // Admin Create/Edit Post form state
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formCategory, setFormCategory] = useState<'técnico' | 'decoração' | 'normas' | 'planejamento'>('planejamento');
  const [formReadTime, setFormReadTime] = useState('5 min de leitura');
  const [formTags, setFormTags] = useState('');
  const [formAuthorName, setFormAuthorName] = useState('Eng. Maurício Santos');
  const [formAuthorRole, setFormAuthorRole] = useState('Diretor Técnico da Serra-Ferro');
  const [formCoverImage, setFormCoverImage] = useState('/assets/images/minimal_aluminum_frames_1782306022668.jpg');
  const [formSeoTitle, setFormSeoTitle] = useState('');
  const [formSeoDescription, setFormSeoDescription] = useState('');
  const [formQuickSummary, setFormQuickSummary] = useState('');
  const [formIsDraft, setFormIsDraft] = useState(false);
  const [formScheduledDate, setFormScheduledDate] = useState('');

  // Persist local storage when posts or subscribers change
  useEffect(() => {
    localStorage.setItem('serra_ferro_blog_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('serra_ferro_newsletter_subscribers', JSON.stringify(subscribers));
  }, [subscribers]);

  // Handle Reading Progress and back-to-top show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Reading progress percentage
      if (selectedPost) {
        const articleElement = document.getElementById('blog-post-article-body');
        if (articleElement) {
          const rect = articleElement.getBoundingClientRect();
          const elementHeight = rect.height;
          const elementTop = rect.top;
          const windowHeight = window.innerHeight;
          
          let progress = 0;
          if (elementTop <= 0) {
            const scrolledDistance = Math.abs(elementTop);
            const scrollableDistance = elementHeight - windowHeight;
            if (scrollableDistance > 0) {
              progress = Math.min((scrolledDistance / scrollableDistance) * 100, 100);
            } else {
              progress = 100;
            }
          }
          setReadingProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedPost]);

  // Handle SEO Meta Updates dynamically
  useEffect(() => {
    if (selectedPost) {
      document.title = selectedPost.seoTitle || `${selectedPost.title} | Blog Serra-Ferro`;
      // Update meta description (simulated / real DOM update)
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', selectedPost.seoDescription || selectedPost.excerpt);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = selectedPost.seoDescription || selectedPost.excerpt;
        document.head.appendChild(meta);
      }
    } else {
      document.title = 'Blog Serra Ferro | Guia Técnico de Esquadrias de Alumínio em São Paulo | SP';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Guia técnico de esquadrias de alumínio em São Paulo: linhas, vedação, normas e dicas de fábrica para sua obra em SP. Decida melhor e economize com a Serra Ferro.');
      }
    }
  }, [selectedPost]);

  // Handle skeleton trigger when query/filters change
  useEffect(() => {
    setShowSkeleton(true);
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 280);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, selectedTag, selectedSort, currentPage]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  const handlePostClick = (post: BlogPost) => {
    // Incrementar visualização simulada
    const updatedPosts = posts.map(p => {
      if (p.id === post.id) {
        return { ...p, views: (p.views || 0) + 1 };
      }
      return p;
    });
    setPosts(updatedPosts);
    setSelectedPost({ ...post, views: (post.views || 0) + 1 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlogList = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Likes dynamically in component state
  const handleLike = (postId: string) => {
    const isAlreadyLiked = likedPosts[postId];
    const increment = isAlreadyLiked ? -1 : 1;
    
    setLikedPosts({
      ...likedPosts,
      [postId]: !isAlreadyLiked
    });

    const updated = posts.map(p => {
      if (p.id === postId) {
        return { ...p, likes: Math.max((p.likes || 0) + increment, 0) };
      }
      return p;
    });
    setPosts(updated);

    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost({
        ...selectedPost,
        likes: Math.max((selectedPost.likes || 0) + increment, 0)
      });
    }

    triggerToast(isAlreadyLiked ? 'Artigo descurtido.' : 'Obrigado pelo seu voto! Artigo curtido.');
  };

  // Toggle FAQ Expand State
  const toggleFaq = (idx: string) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Handling submission of local comments
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    if (!selectedPost) return;

    const newComment = {
      id: `comment-${Date.now()}`,
      author: commentName.trim(),
      text: commentText.trim(),
      date: new Date().toISOString()
    };

    const updatedPosts = posts.map(p => {
      if (p.id === selectedPost.id) {
        const currentComments = p.comments || [];
        return {
          ...p,
          comments: [newComment, ...currentComments]
        };
      }
      return p;
    });

    setPosts(updatedPosts);
    setSelectedPost({
      ...selectedPost,
      comments: [newComment, ...(selectedPost.comments || [])]
    });

    setCommentName('');
    setCommentText('');
    triggerToast('Comentário enviado e publicado com sucesso!');
  };

  // Newsletter submission handler
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterName.trim() || !newsletterEmail.trim()) {
      triggerToast('Por favor, preencha nome e e-mail.');
      return;
    }

    setIsSubmittingNewsletter(true);

    // Simulate API call to email provider
    setTimeout(() => {
      const newSub: NewsletterSubscriber = {
        id: `sub-${Date.now()}`,
        name: newsletterName.trim(),
        email: newsletterEmail.trim(),
        platform: newsletterPlatform,
        date: new Date().toISOString()
      };

      setSubscribers([newSub, ...subscribers]);
      setIsSubmittingNewsletter(false);
      setNewsletterSubscribed(true);
      setNewsletterName('');
      setNewsletterEmail('');
      triggerToast(`Cadastrado no ${newsletterPlatform} com sucesso!`);
    }, 1200);
  };

  // Share triggers
  const copyArticleLink = (slug: string) => {
    const fullUrl = `${window.location.origin}/#blog/${slug}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      triggerToast('Link copiado para a área de transferência!');
    }).catch(() => {
      triggerToast('Não foi possível copiar o link.');
    });
  };

  const shareSocial = (platform: string, postTitle: string, slug: string) => {
    const encodedTitle = encodeURIComponent(postTitle);
    const fullUrl = encodeURIComponent(`${window.location.origin}/#blog/${slug}`);
    
    let shareUrl = '';
    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${fullUrl}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${fullUrl}&text=${encodedTitle}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedTitle}%20-%20${fullUrl}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${fullUrl}&text=${encodedTitle}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodedTitle}&body=Leia%20este%20artigo%20técnico%20da%20Serra-Ferro:%20${fullUrl}`;
        break;
    }

    window.open(shareUrl, '_blank');
  };

  // Admin CRUD methods
  const handleEditClick = (post: BlogPost) => {
    setEditingPost(post);
    setFormTitle(post.title);
    setFormExcerpt(post.excerpt);
    setFormContent(post.content);
    setFormCategory(post.category);
    setFormReadTime(post.readTime);
    setFormTags(post.tags ? post.tags.join(', ') : '');
    setFormAuthorName(post.author?.name || 'Eng. Maurício Santos');
    setFormAuthorRole(post.author?.role || 'Diretor Técnico da Serra-Ferro');
    setFormCoverImage(post.coverImage || '/assets/images/minimal_aluminum_frames_1782306022668.jpg');
    setFormSeoTitle(post.seoTitle || '');
    setFormSeoDescription(post.seoDescription || '');
    setFormQuickSummary(post.quickSummary || '');
    setFormIsDraft(false); // Default to published on edit unless stated
    
    // Smooth scroll to editor
    const formElement = document.getElementById('admin-post-form-anchor');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setFormTitle('');
    setFormExcerpt('');
    setFormContent('');
    setFormCategory('planejamento');
    setFormReadTime('5 min de leitura');
    setFormTags('');
    setFormAuthorName('Eng. Maurício Santos');
    setFormAuthorRole('Diretor Técnico da Serra-Ferro');
    setFormCoverImage('/assets/images/minimal_aluminum_frames_1782306022668.jpg');
    setFormSeoTitle('');
    setFormSeoDescription('');
    setFormQuickSummary('');
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Tem certeza que deseja excluir permanentemente este artigo?')) {
      const updated = posts.filter(p => p.id !== id);
      setPosts(updated);
      triggerToast('Artigo excluído permanentemente.');
      if (selectedPost && selectedPost.id === id) {
        setSelectedPost(null);
      }
    }
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) {
      triggerToast('O título e o conteúdo são obrigatórios.');
      return;
    }

    const generatedSlug = formTitle
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

    const authorInitials = formAuthorName
      .split(' ')
      .filter(n => n.length > 2 && n[0] === n[0].toUpperCase())
      .map(n => n[0])
      .join('')
      .slice(0, 2) || 'SF';

    const tagsArray = formTags
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(t => t.length > 0);

    // Mock automatic TOC generator from markdown titles
    const headings = formContent
      .split('\n')
      .filter(line => line.startsWith('### '))
      .map((line, idx) => {
        const text = line.replace('### ', '');
        const id = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
        return { id: `${id}-${idx}`, text, level: 3 };
      });

    // Simulated standard FAQs if not set
    const faqs = [
      {
        question: `Como este artigo sobre ${formCategory} ajuda minha obra?`,
        answer: 'Este guia técnico foi desenhado pela nossa engenharia comercial para evitar desperdício de material, infiltrações e garantir a melhor vedação e esquadria técnica do mercado.'
      }
    ];

    if (editingPost) {
      // EDITING
      const updated = posts.map(p => {
        if (p.id === editingPost.id) {
          return {
            ...p,
            title: formTitle.trim(),
            slug: generatedSlug,
            excerpt: formExcerpt.trim() || formContent.slice(0, 120) + '...',
            content: formContent,
            category: formCategory,
            readTime: formReadTime,
            coverImage: formCoverImage,
            tags: tagsArray,
            author: {
              name: formAuthorName,
              avatar: authorInitials,
              role: formAuthorRole
            },
            seoTitle: formSeoTitle.trim() || `${formTitle.trim()} | Serra-Ferro`,
            seoDescription: formSeoDescription.trim() || formExcerpt.trim(),
            quickSummary: formQuickSummary.trim() || formContent.slice(0, 200) + '...',
            tableOfContents: headings,
            faqs: faqs
          };
        }
        return p;
      });

      setPosts(updated);
      triggerToast('Artigo atualizado e publicado com sucesso!');
      setEditingPost(null);
    } else {
      // NEW ARTICLE
      const newPost: BlogPost = {
        id: `rich-post-${Date.now()}`,
        title: formTitle.trim(),
        slug: generatedSlug,
        excerpt: formExcerpt.trim() || formContent.slice(0, 120) + '...',
        content: formContent,
        date: formScheduledDate || new Date().toISOString().split('T')[0],
        category: formCategory,
        readTime: formReadTime,
        coverImage: formCoverImage,
        views: 0,
        likes: 0,
        tags: tagsArray,
        author: {
          name: formAuthorName,
          avatar: authorInitials,
          role: formAuthorRole
        },
        seoTitle: formSeoTitle.trim() || `${formTitle.trim()} | Serra-Ferro`,
        seoDescription: formSeoDescription.trim() || formExcerpt.trim(),
        quickSummary: formQuickSummary.trim() || formContent.slice(0, 200) + '...',
        tableOfContents: headings,
        faqs: faqs,
        comments: []
      };

      setPosts([newPost, ...posts]);
      triggerToast(formIsDraft ? 'Rascunho salvo com sucesso.' : 'Novo artigo técnico publicado com sucesso!');
    }

    // Reset Form
    setFormTitle('');
    setFormExcerpt('');
    setFormContent('');
    setFormCategory('planejamento');
    setFormReadTime('5 min de leitura');
    setFormTags('');
    setFormAuthorName('Eng. Maurício Santos');
    setFormAuthorRole('Diretor Técnico da Serra-Ferro');
    setFormCoverImage('/assets/images/minimal_aluminum_frames_1782306022668.jpg');
    setFormSeoTitle('');
    setFormSeoDescription('');
    setFormQuickSummary('');
    setFormScheduledDate('');
    setFormIsDraft(false);
  };

  const handleExportSubscribers = () => {
    const headers = 'ID,Nome,E-mail,Plataforma,Data de Inscricao\n';
    const rows = subscribers.map(s => `"${s.id}","${s.name}","${s.email}","${s.platform}","${s.date}"`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'leads-newsletter-serra-ferro.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerToast('Base de leads exportada em CSV com sucesso!');
  };

  const handleDeleteSubscriber = (id: string) => {
    const updated = subscribers.filter(s => s.id !== id);
    setSubscribers(updated);
    triggerToast('Assinante excluído da base.');
  };

  // Filtering Logic
  const filteredPosts = posts.filter(post => {
    // Busca inteligente
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

    // Filtro por Categoria
    const matchesCategory = selectedCategory === 'todos' || post.category === selectedCategory;

    // Filtro por Tag de nuvem
    const matchesTag = selectedTag === '' || (post.tags && post.tags.includes(selectedTag));

    return matchesSearch && matchesCategory && matchesTag;
  });

  // Sorting Logic
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (selectedSort === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (selectedSort === 'popular') {
      return (b.views || 0) - (a.views || 0);
    }
    if (selectedSort === 'likes') {
      return (b.likes || 0) - (a.likes || 0);
    }
    return 0;
  });

  // Unique Tags cloud generator
  const allTags = Array.from(
    new Set(posts.flatMap(p => p.tags || []))
  );

  // Pagination bounds
  const totalItems = sortedPosts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Schema.org Dynamic JSON-LD Generator simulation view
  const getSchemaJSONLD = (post: BlogPost) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.serraferro.com.br/#blog/${post.slug}`
      },
      "headline": post.seoTitle || post.title,
      "description": post.seoDescription || post.excerpt,
      "image": post.coverImage || "https://www.serraferro.com.br/logo.png",
      "author": {
        "@type": "Person",
        "name": post.author?.name || "Eng. Maurício Santos",
        "jobTitle": post.author?.role || "Diretor Técnico"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Serra-Ferro Esquadrias de Luxo",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.serraferro.com.br/logo.png"
        }
      },
      "datePublished": post.date,
      "dateModified": post.date,
      "articleBody": post.content,
      "keywords": post.tags ? post.tags.join(', ') : "esquadrias, vidraçaria, são paulo"
    };
    return JSON.stringify(schema, null, 2);
  };

  // Identify index of selectedPost to allow navigation (anterior / próximo)
  const currentPostIndex = selectedPost ? posts.findIndex(p => p.id === selectedPost.id) : -1;
  const prevPost = currentPostIndex > 0 ? posts[currentPostIndex - 1] : null;
  const nextPost = currentPostIndex < posts.length - 1 && currentPostIndex !== -1 ? posts[currentPostIndex + 1] : null;

  // Identify Related posts (up to 3 in same category or just others)
  const relatedPosts = selectedPost 
    ? posts.filter(p => p.id !== selectedPost.id && (p.category === selectedPost.category || p.category === 'técnico')).slice(0, 3)
    : [];

  return (
    <div className="min-h-screen bg-neutral-50 relative pb-12" id="blog-section-main-wrapper">
      
      {/* Toast Feedback */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-6 z-50 bg-brand-charcoal text-white text-xs px-4 py-3 rounded-xl shadow-xl border border-neutral-700 flex items-center space-x-2"
          >
            <Check className="w-4.5 h-4.5 text-brand-orange" />
            <span className="font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* READING PROGRESS BAR AT VERY TOP OF VIEWPORT FOR INTERNAL POSTS */}
      {selectedPost && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-50">
          <div 
            className="h-full bg-brand-orange transition-all duration-75"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}

      {/* NAV / UPPER CONTROLS */}
      <div className="pt-24 pb-6 border-b border-neutral-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={selectedPost ? handleBackToBlogList : handleBackToHome}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-brand-charcoal transition-colors border border-neutral-200 cursor-pointer"
              title={selectedPost ? "Voltar para lista" : "Voltar para início"}
              aria-label="Botão Voltar"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="text-left">
              <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider block">SERRA-FERRO ESQUADRIAS</span>
              <span className="text-xs text-brand-muted font-medium">Navegação Técnica</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setAdminMode(!adminMode);
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              className={`inline-flex items-center px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl border transition-all cursor-pointer ${
                adminMode 
                  ? 'bg-brand-orange text-white border-brand-orange' 
                  : 'bg-white hover:bg-neutral-100 text-brand-charcoal border-neutral-300'
              }`}
            >
              <Settings className="w-3.5 h-3.5 mr-1.5 animate-spin-slow" />
              {adminMode ? 'Sair do Painel CMS' : 'Painel de Administração (CMS)'}
            </button>
          </div>
        </div>
      </div>

      {/* DYNAMIC VIEW CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ADMIN MODE OVERLAY PANEL */}
        {adminMode && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-white border border-brand-orange/30 rounded-2xl p-6 shadow-md"
            id="admin-dashboard-container"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-neutral-100 pb-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange text-lg">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-brand-charcoal">Painel Interno de Gerenciamento Blog & SEO</h2>
                  <p className="text-xs text-brand-muted font-medium">Controle rascunhos, agendamentos, SEO individual por post e leads da newsletter.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setAdminTab('articles')}
                  className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg border transition-all cursor-pointer ${
                    adminTab === 'articles' ? 'bg-brand-charcoal text-white border-brand-charcoal' : 'bg-neutral-50 text-brand-muted border-neutral-200'
                  }`}
                >
                  Artigos & SEO
                </button>
                <button 
                  onClick={() => setAdminTab('subscribers')}
                  className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg border transition-all cursor-pointer ${
                    adminTab === 'subscribers' ? 'bg-brand-charcoal text-white border-brand-charcoal' : 'bg-neutral-50 text-brand-muted border-neutral-200'
                  }`}
                >
                  Newsletter Leads ({subscribers.length})
                </button>
              </div>
            </div>

            {/* TAB ARTICLES: CRUD & PUBLISHING LIST */}
            {adminTab === 'articles' && (
              <div className="space-y-8" id="admin-post-form-anchor">
                
                {/* Form Criar/Editar */}
                <form onSubmit={handleSavePost} className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 space-y-4">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-[10px] font-mono font-bold uppercase">
                    <Sparkles className="w-3 h-3" />
                    <span>{editingPost ? 'Modo de Edição de Artigo' : 'Publicar Novo Artigo Técnico'}</span>
                  </span>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-charcoal mb-1 uppercase">Título do Artigo</label>
                      <input 
                        type="text" 
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        placeholder="Ex: Norma NBR 10821: Esquadrias de Alumínio sem Vazamentos"
                        className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal focus:border-brand-orange focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-charcoal mb-1 uppercase">Tempo Estimado de Leitura</label>
                      <input 
                        type="text" 
                        value={formReadTime}
                        onChange={(e) => setFormReadTime(e.target.value)}
                        placeholder="Ex: 5 min de leitura"
                        className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-charcoal mb-1 uppercase">Categoria Principal</label>
                      <select 
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as any)}
                        className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal focus:border-brand-orange focus:outline-none"
                      >
                        <option value="planejamento">Planejamento</option>
                        <option value="técnico">Técnico</option>
                        <option value="normas">Normas Técnicas</option>
                        <option value="decoração">Decoração & Luxo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-charcoal mb-1 uppercase">Tags (Separadas por vírgula)</label>
                      <input 
                        type="text" 
                        value={formTags}
                        onChange={(e) => setFormTags(e.target.value)}
                        placeholder="Ex: esquadrias, sampa, pvc, aluminio"
                        className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-charcoal mb-1 uppercase">Imagem de Capa (URL / Asset)</label>
                      <select 
                        value={formCoverImage}
                        onChange={(e) => setFormCoverImage(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal focus:border-brand-orange focus:outline-none"
                      >
                        <option value="/assets/images/minimal_aluminum_frames_1782306022668.jpg">Portas Minimalistas de Alumínio</option>
                        <option value="/assets/images/modern_facade_glass_1782306036555.jpg">Vidros de Controle Térmico</option>
                        <option value="/assets/images/serralheria_staircase_luxury_card_1782740019768.jpg">Escada Helicoidal Metálica</option>
                        <option value="/assets/images/luxury_villa_glazing_1782306007983.jpg">Fachada Pele de Vidro Jumbo</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-charcoal mb-1 uppercase">Autor - Nome completo</label>
                      <input 
                        type="text" 
                        value={formAuthorName}
                        onChange={(e) => setFormAuthorName(e.target.value)}
                        placeholder="Ex: Eng. Maurício Santos"
                        className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-charcoal mb-1 uppercase">Autor - Cargo na Empresa</label>
                      <input 
                        type="text" 
                        value={formAuthorRole}
                        onChange={(e) => setFormAuthorRole(e.target.value)}
                        placeholder="Ex: Diretor Técnico da Serra-Ferro"
                        className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 border-t border-neutral-200/60 pt-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-orange mb-1 uppercase">Meta Title (Individual SEO)</label>
                      <input 
                        type="text" 
                        value={formSeoTitle}
                        onChange={(e) => setFormSeoTitle(e.target.value)}
                        placeholder="Ex: Esquadrias de Alumínio NBR 10821 em SP | Serra-Ferro"
                        className="w-full bg-white border-neutral-300 border rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-orange mb-1 uppercase">Meta Description (Individual SEO)</label>
                      <input 
                        type="text" 
                        value={formSeoDescription}
                        onChange={(e) => setFormSeoDescription(e.target.value)}
                        placeholder="Ex: Saiba como as esquadrias de alumínio da Serra-Ferro evitam infiltrações..."
                        className="w-full bg-white border-neutral-300 border rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-emerald-600 mb-1 uppercase">Resumo Rápido (AEO & GEO: Otimizado para Respostas de Inteligência Artificial)</label>
                    <textarea 
                      value={formQuickSummary}
                      onChange={(e) => setFormQuickSummary(e.target.value)}
                      placeholder="Insira um parágrafo objetivo e de alta densidade semântica para indexação de IA..."
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal h-16 focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-charcoal mb-1 uppercase">Resumo / Introdução Rápida (Capa)</label>
                    <input 
                      type="text" 
                      value={formExcerpt}
                      onChange={(e) => setFormExcerpt(e.target.value)}
                      placeholder="Resumo curto de 1 ou 2 linhas para os cards de listagem principal..."
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs font-sans text-brand-charcoal focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-mono font-bold text-brand-charcoal uppercase">Conteúdo do Artigo (Suporta ### Título e listas com números/bolas)</label>
                      <span className="text-[10px] text-brand-muted font-mono">Use "### Título" para tópicos e pulo duplo de linha para parágrafos novos.</span>
                    </div>
                    <textarea 
                      value={formContent}
                      onChange={(e) => setFormContent(e.target.value)}
                      placeholder="Escreva seu artigo técnico de forma aprofundada..."
                      className="w-full bg-white border border-neutral-300 rounded-lg p-3 text-xs font-sans text-brand-charcoal h-44 focus:border-brand-orange focus:outline-none"
                      required
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200/60 pt-4">
                    <div className="flex items-center space-x-6">
                      <label className="flex items-center space-x-2 text-xs text-brand-charcoal font-semibold cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          checked={formIsDraft}
                          onChange={(e) => setFormIsDraft(e.target.checked)}
                          className="rounded border-neutral-300 text-brand-orange focus:ring-brand-orange"
                        />
                        <span>Salvar como Rascunho Interno</span>
                      </label>

                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-brand-charcoal font-semibold">Agendar Publicação:</span>
                        <input 
                          type="date" 
                          value={formScheduledDate}
                          onChange={(e) => setFormScheduledDate(e.target.value)}
                          className="bg-white border border-neutral-300 rounded-lg px-2 py-1 text-xs text-brand-charcoal focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {editingPost && (
                        <button 
                          type="button"
                          onClick={handleCancelEdit}
                          className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-brand-charcoal text-xs font-bold rounded-lg transition-colors cursor-pointer"
                        >
                          Cancelar Edição
                        </button>
                      )}
                      <button 
                        type="submit"
                        className="px-6 py-2 bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-colors shadow-sm cursor-pointer"
                      >
                        {editingPost ? 'Salvar Alterações e Publicar' : 'Publicar Artigo Técnico'}
                      </button>
                    </div>
                  </div>

                </form>

                {/* List of articles */}
                <div className="space-y-3">
                  <h3 className="font-display text-sm font-bold text-brand-charcoal">Artigos Técnicos no Sistema</h3>
                  <div className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-neutral-100 text-xs font-mono font-bold text-brand-charcoal uppercase border-b border-neutral-200">
                          <th className="p-3">Título</th>
                          <th className="p-3">Categoria</th>
                          <th className="p-3">Data</th>
                          <th className="p-3 text-center">Visualizações</th>
                          <th className="p-3 text-right">Ações</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 text-xs text-brand-charcoal">
                        {posts.map(p => (
                          <tr key={p.id} className="hover:bg-neutral-100/50 transition-colors">
                            <td className="p-3 font-semibold text-brand-charcoal max-w-xs truncate">{p.title}</td>
                            <td className="p-3">
                              <span className="inline-flex px-2 py-0.5 bg-neutral-200 text-[10px] font-mono rounded font-bold uppercase">
                                {p.category}
                              </span>
                            </td>
                            <td className="p-3 text-brand-muted">{new Date(p.date).toLocaleDateString('pt-BR')}</td>
                            <td className="p-3 text-center font-mono font-bold text-brand-orange">{p.views || 0}</td>
                            <td className="p-3 text-right">
                              <div className="flex items-center justify-end space-x-2">
                                <button 
                                  onClick={() => handleEditClick(p)}
                                  className="w-7 h-7 rounded bg-white border border-neutral-300 text-brand-charcoal hover:bg-neutral-100 flex items-center justify-center cursor-pointer transition-colors"
                                  title="Editar"
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                </button>
                                <button 
                                  onClick={() => handleDeletePost(p.id)}
                                  className="w-7 h-7 rounded bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 flex items-center justify-center cursor-pointer transition-colors"
                                  title="Excluir"
                                >
                                  <Trash className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* TAB SUBSCRIBERS: NEWSLETTER DATABASE */}
            {adminTab === 'subscribers' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold text-brand-charcoal">Lista de Assinantes da Newsletter (Leads)</h3>
                  <button 
                    onClick={handleExportSubscribers}
                    className="inline-flex items-center px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Exportar Leads (CSV)
                  </button>
                </div>

                <div className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-neutral-100 text-xs font-mono font-bold text-brand-charcoal uppercase border-b border-neutral-200">
                        <th className="p-3">Nome</th>
                        <th className="p-3">E-mail</th>
                        <th className="p-3">Integração</th>
                        <th className="p-3">Data de Assinatura</th>
                        <th className="p-3 text-right">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 text-xs text-brand-charcoal">
                      {subscribers.map(sub => (
                        <tr key={sub.id} className="hover:bg-neutral-100/50 transition-colors">
                          <td className="p-3 font-semibold text-brand-charcoal">{sub.name}</td>
                          <td className="p-3 font-mono text-neutral-600">{sub.email}</td>
                          <td className="p-3">
                            <span className="inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-mono rounded font-bold uppercase border border-blue-200">
                              {sub.platform}
                            </span>
                          </td>
                          <td className="p-3 text-brand-muted">{new Date(sub.date).toLocaleString('pt-BR')}</td>
                          <td className="p-3 text-right">
                            <button 
                              onClick={() => handleDeleteSubscriber(sub.id)}
                              className="w-7 h-7 rounded bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 flex items-center justify-center cursor-pointer transition-colors"
                              title="Remover Lead"
                            >
                              <Trash className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </motion.div>
        )}

        {/* ========================================================= */}
        {/* VIEW 1: ARTICLE DETAIL VIEW (PÁGINA INTERNA DO ARTIGO) */}
        {/* ========================================================= */}
        {selectedPost ? (
          <div className="space-y-12 animate-fade-in" id="blog-internal-post-container">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-[11px] font-mono font-semibold text-brand-muted uppercase tracking-wider" aria-label="Breadcrumb">
              <button onClick={handleBackToHome} className="hover:text-brand-orange transition-colors">Início</button>
              <ChevronRight className="w-3 h-3 text-neutral-400" />
              <button onClick={handleBackToBlogList} className="hover:text-brand-orange transition-colors">Blog</button>
              <ChevronRight className="w-3 h-3 text-neutral-400" />
              <span className="text-brand-orange capitalize font-bold">{selectedPost.category}</span>
              <ChevronRight className="w-3 h-3 text-neutral-400 hidden sm:inline" />
              <span className="text-brand-charcoal truncate max-w-[200px] hidden sm:inline font-bold">{selectedPost.title}</span>
            </nav>

            {/* ARTIGO LAYOUT */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* SIDEBAR ESQUERDA: TOC & REDES SOCIAIS (Fica colada no topo ao descer) */}
              <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-6 order-2 lg:order-1">
                
                {/* Índice de Conteúdo (TOC) */}
                {selectedPost.tableOfContents && selectedPost.tableOfContents.length > 0 && (
                  <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-3.5">
                    <h3 className="font-display text-xs font-bold text-brand-charcoal uppercase tracking-widest border-b border-neutral-100 pb-2">
                      Índice do Artigo
                    </h3>
                    <nav className="space-y-2">
                      {selectedPost.tableOfContents.map((heading) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const target = document.getElementById(heading.id);
                            if (target) {
                              target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              setActiveTocSection(heading.id);
                            }
                          }}
                          className={`block text-[11px] font-sans font-medium transition-all ${
                            activeTocSection === heading.id 
                              ? 'text-brand-orange font-bold border-l-2 border-brand-orange pl-2.5 translate-x-0.5' 
                              : 'text-brand-muted hover:text-brand-charcoal pl-0'
                          }`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Compartilhamento Social */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-4">
                  <h3 className="font-display text-xs font-bold text-brand-charcoal uppercase tracking-widest border-b border-neutral-100 pb-2">
                    Compartilhar Conteúdo
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    <button 
                      onClick={() => shareSocial('linkedin', selectedPost.title, selectedPost.slug)}
                      className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-brand-charcoal hover:text-[#0077b5] flex items-center justify-center transition-colors border border-neutral-200 cursor-pointer"
                      title="Compartilhar no LinkedIn"
                    >
                      <Linkedin className="w-4.5 h-4.5" />
                    </button>
                    <button 
                      onClick={() => shareSocial('facebook', selectedPost.title, selectedPost.slug)}
                      className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-brand-charcoal hover:text-[#1877f2] flex items-center justify-center transition-colors border border-neutral-200 cursor-pointer"
                      title="Compartilhar no Facebook"
                    >
                      <Facebook className="w-4.5 h-4.5" />
                    </button>
                    <button 
                      onClick={() => shareSocial('twitter', selectedPost.title, selectedPost.slug)}
                      className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-brand-charcoal hover:text-[#1da1f2] flex items-center justify-center transition-colors border border-neutral-200 cursor-pointer"
                      title="Compartilhar no X"
                    >
                      <Twitter className="w-4.5 h-4.5" />
                    </button>
                    <button 
                      onClick={() => shareSocial('whatsapp', selectedPost.title, selectedPost.slug)}
                      className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-brand-charcoal hover:text-[#25d366] flex items-center justify-center transition-colors border border-neutral-200 cursor-pointer"
                      title="Compartilhar no WhatsApp"
                    >
                      <MessageSquare className="w-4.5 h-4.5" />
                    </button>
                    <button 
                      onClick={() => shareSocial('telegram', selectedPost.title, selectedPost.slug)}
                      className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-brand-charcoal hover:text-[#0088cc] flex items-center justify-center transition-colors border border-neutral-200 cursor-pointer"
                      title="Compartilhar no Telegram"
                    >
                      <Send className="w-4.5 h-4.5" />
                    </button>
                    <button 
                      onClick={() => shareSocial('email', selectedPost.title, selectedPost.slug)}
                      className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-brand-charcoal hover:text-brand-orange flex items-center justify-center transition-colors border border-neutral-200 cursor-pointer"
                      title="Enviar por E-mail"
                    >
                      <Mail className="w-4.5 h-4.5" />
                    </button>
                    <button 
                      onClick={() => copyArticleLink(selectedPost.slug)}
                      className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-brand-charcoal hover:text-brand-orange flex items-center justify-center transition-colors border border-neutral-200 cursor-pointer col-span-2"
                      title="Copiar Link Curto"
                    >
                      <Copy className="w-4 h-4 mr-1.5" />
                      <span className="text-[10px] font-mono font-bold uppercase">Copiar</span>
                    </button>
                  </div>
                </div>

                {/* Curtidas & Visualizações no Artigo */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm flex items-center justify-between text-xs font-mono font-semibold">
                  <button 
                    onClick={() => handleLike(selectedPost.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-xl border transition-all cursor-pointer ${
                      likedPosts[selectedPost.id] 
                        ? 'bg-brand-orange/10 text-brand-orange border-brand-orange/30' 
                        : 'bg-neutral-50 hover:bg-neutral-100 text-brand-charcoal border-neutral-200'
                    }`}
                  >
                    <ThumbsUp className={`w-4 h-4 ${likedPosts[selectedPost.id] ? 'fill-brand-orange text-brand-orange' : ''}`} />
                    <span>Curtir ({selectedPost.likes || 0})</span>
                  </button>
                  
                  <div className="flex items-center text-brand-muted space-x-1">
                    <Eye className="w-4 h-4 text-neutral-400" />
                    <span>{selectedPost.views || 0} visualizações</span>
                  </div>
                </div>

              </aside>

              {/* CONTEÚDO PRINCIPAL DO ARTIGO */}
              <main className="lg:col-span-9 space-y-8 order-1 lg:order-2" id="blog-post-article-body">
                
                <article className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
                  
                  {/* Hero Banner Imagem da Capa */}
                  <div className="h-44 sm:h-64 md:h-80 w-full relative bg-neutral-950 overflow-hidden">
                    {selectedPost.coverImage ? (
                      <img 
                        src={selectedPost.coverImage} 
                        alt={`Capa do artigo ${selectedPost.title}`} 
                        className="w-full h-full object-cover opacity-85"
                        loading="lazy"
                      />
                    ) : (
                      <PlaceholderImage category="geral" label={selectedPost.title} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 bg-brand-orange text-white text-[9px] font-mono font-bold uppercase rounded-md shadow-md">
                        {selectedPost.category}
                      </span>
                      <h1 className="font-display text-lg sm:text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                        {selectedPost.title}
                      </h1>
                    </div>
                  </div>

                  {/* Metadados Detalhados */}
                  <div className="px-6 py-4 bg-neutral-50 border-b border-neutral-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-semibold text-brand-muted">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-brand-orange" />
                        {new Date(selectedPost.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-orange" />
                        {selectedPost.readTime}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 bg-brand-orange text-white font-display text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                        {selectedPost.author?.avatar || 'MS'}
                      </div>
                      <div className="text-left text-[10px] leading-tight">
                        <span className="text-brand-charcoal block font-bold">{selectedPost.author?.name || 'Eng. Maurício Santos'}</span>
                        <span className="text-[9px] block text-neutral-400 font-medium">{selectedPost.author?.role || 'Diretor Técnico'}</span>
                      </div>
                    </div>
                  </div>

                  {/* ARTIGO BODY */}
                  <div className="p-6 sm:p-10 space-y-6">

                    {/* AEO / GEO "RESUMO RÁPIDO" COMPONENT (Otimizado para ChatGPT / Gemini / Claude) */}
                    {selectedPost.quickSummary && (
                      <div className="p-5 bg-orange-50/60 border-l-4 border-brand-orange rounded-r-xl space-y-2.5 shadow-xs" id="aeo-ai-summary-block">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
                          <h4 className="font-display text-xs font-bold text-brand-charcoal uppercase tracking-widest">
                            Resumo Rápido para Motores de Busca e IAs (AEO / GEO)
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed font-medium">
                          {selectedPost.quickSummary}
                        </p>
                      </div>
                    )}

                    {/* Rich Content Rendered */}
                    <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-brand-charcoal leading-relaxed space-y-5" id="rich-rendered-html-body">
                      {selectedPost.content.split('\n\n').map((paragraph, index) => {
                        // Headers
                        if (paragraph.startsWith('### ')) {
                          const text = paragraph.replace('### ', '');
                          const id = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                          return (
                            <h3 
                              key={index} 
                              id={`${id}-${index}`}
                              className="font-display text-sm sm:text-base font-extrabold text-brand-charcoal mt-8 mb-2 pb-1 border-b border-neutral-100 tracking-tight"
                            >
                              {text}
                            </h3>
                          );
                        }

                        // Callouts / Blockquotes
                        if (paragraph.startsWith('> ')) {
                          return (
                            <blockquote key={index} className="pl-4 border-l-4 border-brand-charcoal italic text-brand-muted my-4 font-medium">
                              {paragraph.replace('> ', '')}
                            </blockquote>
                          );
                        }

                        // Bullets list rendering
                        if (paragraph.startsWith('1. ') || paragraph.startsWith('* ')) {
                          const items = paragraph.split('\n');
                          return (
                            <ul key={index} className="space-y-2 pl-5 list-disc my-4">
                              {items.map((item, itemIdx) => {
                                let cleanItem = item.replace(/^\d+\.\s+/, '').replace(/^\*\s+/, '');
                                if (cleanItem.includes('**')) {
                                  return (
                                    <li key={itemIdx} className="leading-relaxed">
                                      {cleanItem.split('**').map((chunk, chunkIdx) => 
                                        chunkIdx % 2 === 1 ? <strong key={chunkIdx} className="text-brand-orange font-bold">{chunk}</strong> : chunk
                                      )}
                                    </li>
                                  );
                                }
                                return <li key={itemIdx} className="leading-relaxed">{cleanItem}</li>;
                              })}
                            </ul>
                          );
                        }

                        // Tables renderization
                        if (paragraph.includes('|')) {
                          const rows = paragraph.split('\n').filter(r => r.trim() !== '');
                          return (
                            <div key={index} className="overflow-x-auto my-5 rounded-xl border border-neutral-200">
                              <table className="w-full text-left border-collapse text-xs">
                                <thead>
                                  <tr className="bg-neutral-100 font-mono font-bold text-brand-charcoal uppercase border-b border-neutral-200">
                                    {rows[0].split('|').map((col, cIdx) => col.trim() && (
                                      <th key={cIdx} className="p-3">{col.trim()}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-200">
                                  {rows.slice(2).map((row, rIdx) => (
                                    <tr key={rIdx} className="hover:bg-neutral-50/50">
                                      {row.split('|').map((col, cIdx) => col.trim() && (
                                        <td key={cIdx} className="p-3 font-medium text-neutral-600">{col.trim()}</td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          );
                        }

                        // Bold matches
                        if (paragraph.includes('**')) {
                          return (
                            <p key={index} className="leading-relaxed">
                              {paragraph.split('**').map((chunk, chunkIdx) => 
                                chunkIdx % 2 === 1 ? <strong key={chunkIdx} className="text-brand-orange font-bold">{chunk}</strong> : chunk
                              )}
                            </p>
                          );
                        }

                        return (
                          <p key={index} className="leading-relaxed">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>

                    {/* Embedded simulated high-quality video player */}
                    <div className="my-8 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm relative group bg-neutral-900 aspect-video flex flex-col justify-between p-6 text-white select-none">
                      <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${selectedPost.coverImage}')` }} />
                      <div className="absolute inset-0 bg-neutral-900/60" />
                      
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-[10px] font-mono bg-brand-orange text-white px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">VÍDEO EXCLUSIVO</span>
                        <span className="text-[10px] font-mono text-neutral-300">Duração: 4:25 min</span>
                      </div>

                      <div className="relative z-10 text-center space-y-3 py-6">
                        <div className="w-16 h-16 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center mx-auto border border-white/30 backdrop-blur-xs transition-all duration-300 transform group-hover:scale-110 cursor-pointer">
                          <BookOpen className="w-7 h-7 text-white fill-white/10" />
                        </div>
                        <h4 className="font-display text-sm font-bold max-w-sm mx-auto">Assistir Tour Técnico de Montagem na Fábrica Serra-Ferro</h4>
                        <p className="text-[10px] text-neutral-300 font-medium">Conheça o processo pneumático de estanqueidade e corte a laser de esquadrias.</p>
                      </div>

                      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-300 border-t border-white/10 pt-2">
                        <span>Resolução: Ultra HD 4K</span>
                        <span>Equipe Técnica Própria</span>
                      </div>
                    </div>

                    {/* IN-POST FAQ ACCORDION SECION (Otimizado para AEO) */}
                    {selectedPost.faqs && selectedPost.faqs.length > 0 && (
                      <div className="border-t border-neutral-200 pt-8 space-y-4" id="aeo-faq-accordion-section">
                        <div className="flex items-center space-x-2 mb-2">
                          <Globe className="w-4.5 h-4.5 text-brand-orange" />
                          <h4 className="font-display text-xs font-bold text-brand-charcoal uppercase tracking-widest">
                            Perguntas Frequentes do Artigo (FAQ / AEO)
                          </h4>
                        </div>
                        <div className="space-y-3">
                          {selectedPost.faqs.map((faq, idx) => {
                            const uniqueFaqId = `${selectedPost.id}-faq-${idx}`;
                            const isExpanded = expandedFaqs[uniqueFaqId];
                            return (
                              <div key={idx} className="border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50/50 shadow-xs">
                                <button
                                  type="button"
                                  onClick={() => toggleFaq(uniqueFaqId)}
                                  className="w-full flex items-center justify-between p-4 text-left font-display text-xs sm:text-sm font-bold text-brand-charcoal cursor-pointer select-none"
                                >
                                  <span>{faq.question}</span>
                                  <ChevronDown className={`w-4 h-4 text-brand-orange transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                </button>
                                {isExpanded && (
                                  <div className="px-4 pb-4 text-xs sm:text-sm text-brand-muted leading-relaxed font-medium border-t border-neutral-200/40 pt-3 bg-white">
                                    {faq.answer}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* CTA DE FINAL DE ARTIGO DIRECT TO WHATSAPP */}
                    <div className="mt-12 p-6 sm:p-8 bg-brand-charcoal text-white rounded-2xl space-y-5 text-center relative overflow-hidden shadow-md">
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
                      <span className="inline-flex items-center px-3 py-1 bg-neutral-800 text-brand-orange text-[10px] font-mono font-bold uppercase tracking-widest rounded-full relative z-10">
                        ANÁLISE DE PROJETO GRATUITA
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold relative z-10">
                        Quer aplicar esse nível de excelência técnica na sua obra?
                      </h3>
                      <p className="text-xs text-neutral-300 max-w-xl mx-auto leading-relaxed relative z-10">
                        Seja para esquadrias acústicas sob medida ou vidros tecnológicos de controle térmico, fale agora mesmo com o nosso comercial técnico pelo WhatsApp. Compatibilizamos sua arquitetura com orçamento em 48h.
                      </p>
                      <div className="pt-2 relative z-10">
                        <a
                          href={`https://wa.me/5511913243623?text=${encodeURIComponent(`Olá Serra-Ferro! Estava lendo o artigo técnico "${selectedPost.title}" no seu blog e gostaria de solicitar um orçamento ou tirar dúvidas sobre a minha obra.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-orange hover:bg-brand-orange/95 text-white rounded-xl font-display text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-103 shadow-md animate-pulse-orange cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Consultar Engenheiro no WhatsApp
                        </a>
                      </div>
                    </div>

                  </div>
                </article>

                {/* ANTERIOR / PRÓXIMO NAVEGADOR DE ARTIGO */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {prevPost ? (
                    <button
                      onClick={() => handlePostClick(prevPost)}
                      className="p-4 bg-white border border-neutral-200 rounded-xl hover:border-brand-orange hover:shadow-sm text-left transition-all flex flex-col justify-between group cursor-pointer"
                    >
                      <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider block mb-1">← ARTIGO ANTERIOR</span>
                      <span className="font-display text-xs font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors truncate w-full">{prevPost.title}</span>
                    </button>
                  ) : <div className="hidden sm:block" />}

                  {nextPost && (
                    <button
                      onClick={() => handlePostClick(nextPost)}
                      className="p-4 bg-white border border-neutral-200 rounded-xl hover:border-brand-orange hover:shadow-sm text-right transition-all flex flex-col justify-between items-end group cursor-pointer"
                    >
                      <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider block mb-1">PRÓXIMO ARTIGO →</span>
                      <span className="font-display text-xs font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors truncate w-full">{nextPost.title}</span>
                    </button>
                  )}
                </div>

                {/* SESSÃO DE COMENTÁRIOS INTERATIVA */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                  <h3 className="font-display text-sm font-bold text-brand-charcoal uppercase tracking-widest border-b border-neutral-100 pb-3">
                    Comentários e Debates Técnicos ({selectedPost.comments?.length || 0})
                  </h3>

                  {/* Form */}
                  <form onSubmit={handleCommentSubmit} className="space-y-4">
                    <p className="text-xs text-brand-muted">Deixe sua dúvida, sugestão ou contribuição para debate técnico. Seus dados não serão divulgados.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono font-bold text-brand-charcoal mb-1 uppercase">Seu Nome / Empresa</label>
                        <input 
                          type="text" 
                          value={commentName}
                          onChange={(e) => setCommentName(e.target.value)}
                          placeholder="Ex: Arq. Fernanda Rezende"
                          className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs text-brand-charcoal focus:border-brand-orange focus:outline-none focus:bg-white transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-brand-charcoal mb-1 uppercase">Sua Mensagem</label>
                      <textarea 
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Insira sua mensagem ou dúvida técnica..."
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-3 text-xs text-brand-charcoal h-24 focus:border-brand-orange focus:outline-none focus:bg-white transition-colors"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-brand-charcoal hover:bg-brand-orange text-white font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Enviar Comentário
                    </button>
                  </form>

                  {/* Comments list */}
                  <div className="space-y-4 pt-4 border-t border-neutral-100">
                    {selectedPost.comments && selectedPost.comments.length > 0 ? (
                      selectedPost.comments.map((c) => (
                        <div key={c.id} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/60 text-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-brand-charcoal">{c.author}</span>
                            <span className="font-mono text-[10px] text-brand-muted">
                              {new Date(c.date).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          <p className="text-neutral-600 leading-relaxed font-medium">{c.text}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-brand-muted text-center py-4 italic">Nenhum comentário publicado. Seja o primeiro a comentar!</p>
                    )}
                  </div>
                </div>

                {/* ARTIGOS RELACIONADOS */}
                {relatedPosts.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-sm font-bold text-brand-charcoal uppercase tracking-widest border-b border-neutral-200 pb-2">
                      Artigos Relacionados
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {relatedPosts.map((related) => (
                        <article 
                          key={related.id}
                          onClick={() => handlePostClick(related)}
                          className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                        >
                          <div className="h-28 bg-neutral-100 relative overflow-hidden">
                            {related.coverImage ? (
                              <img src={related.coverImage} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                              <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-brand-orange font-bold font-mono text-[10px]">SERRA-FERRO</div>
                            )}
                          </div>
                          <div className="p-4 space-y-2 flex-grow">
                            <span className="text-[9px] font-mono font-bold text-brand-orange uppercase block">{related.category}</span>
                            <h4 className="font-display text-xs font-bold text-brand-charcoal leading-snug line-clamp-2 group-hover:text-brand-orange transition-colors">{related.title}</h4>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* TECH INSPECTOR drawer panel (Schema.org / Breadcrumb / Headings audit) */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-xs space-y-4">
                  <details className="group">
                    <summary className="flex items-center justify-between text-xs font-mono font-bold text-neutral-500 cursor-pointer select-none group-open:text-brand-orange">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>METADADOS DE IA & SEO (CLIQUE PARA VERIFICAR SCHEMA.ORG, AEO E GEO)</span>
                      </div>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pt-4 space-y-4 border-t border-neutral-100 mt-3 text-xs font-mono">
                      <div className="space-y-1">
                        <span className="text-brand-charcoal font-bold block">1. Meta Tag Title Dinâmica:</span>
                        <code className="bg-neutral-100 px-2 py-1 rounded text-brand-orange block font-mono text-[11px] truncate">{selectedPost.seoTitle || `${selectedPost.title} | Blog`}</code>
                      </div>
                      <div className="space-y-1">
                        <span className="text-brand-charcoal font-bold block">2. Meta Tag Description Dinâmica:</span>
                        <code className="bg-neutral-100 p-2 rounded text-brand-muted block font-mono text-[11px]">{selectedPost.seoDescription || selectedPost.excerpt}</code>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-brand-charcoal font-bold">3. Marcação de Dados Estruturados Schema.org (JSON-LD):</span>
                          <span className="text-[10px] text-emerald-600 font-bold uppercase">● Injetado Ativamente</span>
                        </div>
                        <pre className="bg-neutral-900 text-neutral-300 p-3 rounded-lg text-[10px] leading-relaxed overflow-x-auto max-h-56 scrollbar-thin">
                          {getSchemaJSONLD(selectedPost)}
                        </pre>
                      </div>
                    </div>
                  </details>
                </div>

              </main>

            </div>

          </div>
        ) : (
          /* ========================================================= */
          /* VIEW 2: MAIN LISTING PAGE (PÁGINA PRINCIPAL DO BLOG) */
          /* ========================================================= */
          <div className="space-y-12 animate-fade-in" id="blog-listing-main-view">
            
            {/* HERO SECTION DO BLOG */}
            <header className="text-center max-w-4xl mx-auto space-y-4">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                CONTEÚDO EDUCATIVO E ENGENHARIA DE ARQUITETURA
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-none">
                Blog Técnico da <span className="text-brand-orange">Serra-Ferro</span>
              </h1>
              <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto font-medium leading-relaxed">
                Artigos práticos redigidos por nossos engenheiros. Aprenda sobre atenuação acústica de esquadrias, vidros de controle solar térmico, regras de vedações e laudos ART da ABNT.
              </p>

              {/* BARRA DE BUSCA INTELIGENTE */}
              <div className="max-w-xl mx-auto pt-4 relative">
                <div className="relative">
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Pesquise por títulos, conteúdos, tags, normas técnicas..."
                    className="w-full bg-white border border-neutral-300 rounded-xl pl-4 pr-12 py-3.5 text-xs text-brand-charcoal placeholder-neutral-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all shadow-sm"
                  />
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="p-1 text-neutral-400 hover:text-brand-charcoal text-[11px] font-mono cursor-pointer"
                      >
                        Limpar
                      </button>
                    )}
                    <button 
                      className="p-2 bg-brand-charcoal text-white rounded-lg hover:bg-brand-orange transition-colors cursor-pointer"
                      aria-label="Pesquisar artigos"
                    >
                      <Search className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </header>

            {/* FILTROS E PESQUISAS RAPIDAS */}
            <div className="border-y border-neutral-200 bg-white py-4 shadow-xs rounded-xl px-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                
                {/* Categorias Pills */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] font-mono font-bold text-brand-charcoal uppercase tracking-wider mr-2">CATEGORIA:</span>
                  {[
                    { id: 'todos', label: 'Todos os posts' },
                    { id: 'planejamento', label: 'Planejamento' },
                    { id: 'técnico', label: 'Técnico' },
                    { id: 'normas', label: 'Normas' },
                    { id: 'decoração', label: 'Decoração' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedTag('');
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1 text-xs font-mono font-semibold rounded-full border transition-all cursor-pointer ${
                        selectedCategory === cat.id 
                          ? 'bg-brand-orange text-white border-brand-orange shadow-xs' 
                          : 'bg-neutral-50 text-brand-muted border-neutral-200 hover:bg-neutral-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Ordenação */}
                <div className="flex items-center space-x-2 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-neutral-100 pt-3 md:pt-0">
                  <span className="text-[10px] font-mono font-bold text-brand-charcoal uppercase tracking-wider">ORDENAR POR:</span>
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value as any)}
                    className="bg-neutral-50 border border-neutral-200 rounded-lg px-2.5 py-1 text-xs font-sans text-brand-charcoal focus:outline-none focus:border-brand-orange cursor-pointer"
                  >
                    <option value="recent">Mais Recentes</option>
                    <option value="popular">Mais Populares (Acesso)</option>
                    <option value="likes">Mais Curtidos (Recomendados)</option>
                  </select>
                </div>

              </div>

              {/* Tag Cloud filter */}
              {allTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 items-center mt-3 pt-3 border-t border-neutral-100">
                  <span className="text-[10px] font-mono font-bold text-brand-charcoal uppercase tracking-wider mr-1.5">TAGS QUENTES:</span>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedTag(selectedTag === tag ? '' : tag);
                        setCurrentPage(1);
                      }}
                      className={`px-2 py-0.5 text-[10px] font-sans font-medium rounded-md border transition-all cursor-pointer ${
                        selectedTag === tag 
                          ? 'bg-brand-charcoal text-white border-brand-charcoal' 
                          : 'bg-neutral-50 text-brand-muted border-neutral-200/80 hover:bg-neutral-100'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                  {selectedTag && (
                    <button 
                      onClick={() => setSelectedTag('')}
                      className="text-[10px] font-mono text-brand-orange underline ml-2 font-bold cursor-pointer"
                    >
                      Limpar Filtro de Tag
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* ARTIGO EM DESTAQUE (SPOTLIGHT) */}
            {filteredPosts.length > 0 && searchQuery === '' && selectedCategory === 'todos' && selectedTag === '' && currentPage === 1 && (
              <section className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm grid md:grid-cols-12 items-stretch gap-0 animate-fade-in group hover:shadow-md transition-shadow duration-300">
                
                <div className="md:col-span-7 h-48 sm:h-64 md:h-full relative overflow-hidden bg-neutral-900">
                  {filteredPosts[0].coverImage ? (
                    <img 
                      src={filteredPosts[0].coverImage} 
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-brand-orange font-mono font-extrabold text-xs">SERRA-FERRO</div>
                  )}
                  <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 bg-brand-orange text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded-md shadow-md">
                    ARTIGO EM DESTAQUE
                  </span>
                </div>

                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-brand-orange text-[10px] font-mono font-bold uppercase rounded-md">
                      {filteredPosts[0].category}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-extrabold text-brand-charcoal leading-snug group-hover:text-brand-orange transition-colors">
                      {filteredPosts[0].title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed font-medium">
                      {filteredPosts[0].excerpt}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-neutral-100">
                    <div className="flex items-center justify-between text-[11px] font-mono text-brand-muted">
                      <span>{new Date(filteredPosts[0].date).toLocaleDateString('pt-BR')}</span>
                      <span>{filteredPosts[0].readTime}</span>
                    </div>

                    <button
                      onClick={() => handlePostClick(filteredPosts[0])}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-brand-charcoal hover:bg-brand-orange text-white font-display text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                    >
                      Ler artigo completo
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>

              </section>
            )}

            {/* LISTAGEM GRID PRINCIPAL */}
            <section className="space-y-8">
              
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                <h2 className="font-display text-sm font-bold text-brand-charcoal uppercase tracking-widest">
                  {searchQuery ? `Artigos correspondentes (${totalItems})` : 'Todos os Artigos Técnicos'}
                </h2>
                <div className="flex gap-2 text-xs font-mono text-brand-muted">
                  <span>Modo:</span>
                  <button 
                    onClick={() => setPaginationMode('traditional')}
                    className={`font-bold uppercase ${paginationMode === 'traditional' ? 'text-brand-orange underline' : 'hover:text-brand-charcoal'}`}
                  >
                    Paginado
                  </button>
                  <span>|</span>
                  <button 
                    onClick={() => {
                      setPaginationMode('infinite');
                      setItemsPerPage(99); // Exibe tudo de uma vez simulando infinite
                    }}
                    className={`font-bold uppercase ${paginationMode === 'infinite' ? 'text-brand-orange underline' : 'hover:text-brand-charcoal'}`}
                  >
                    Rolo Infinito
                  </button>
                </div>
              </div>

              {/* SKELETON LOADER PREVIEW ON FILTER OR PAGINATION CHANGE */}
              {showSkeleton ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="bg-white border border-neutral-200 rounded-xl p-5 space-y-4 shadow-xs animate-pulse">
                      <div className="h-44 bg-neutral-200 rounded-xl" />
                      <div className="space-y-2">
                        <div className="h-4 bg-neutral-200 rounded w-1/4" />
                        <div className="h-5 bg-neutral-200 rounded w-3/4" />
                        <div className="h-10 bg-neutral-200 rounded w-full" />
                      </div>
                      <div className="h-8 bg-neutral-200 rounded w-1/2 pt-4" />
                    </div>
                  ))}
                </div>
              ) : (
                /* ACTUAL ARTICLE CARDS */
                filteredPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-cards-grid">
                    {paginatedPosts.map((post) => (
                      <article
                        key={post.id}
                        className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                        onClick={() => handlePostClick(post)}
                        id={`blog-post-card-${post.slug}`}
                      >
                        <div>
                          {/* Image box with Simulated Lazy Loading */}
                          <div className="h-44 bg-neutral-950 overflow-hidden relative">
                            {post.coverImage ? (
                              <img 
                                src={post.coverImage} 
                                alt={`Capa do artigo ${post.title}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-brand-orange font-mono font-extrabold text-[11px]">SERRA-FERRO</div>
                            )}
                            <span className="absolute bottom-3 left-3 inline-flex items-center px-2 py-0.5 bg-brand-charcoal text-white text-[9px] font-mono font-bold uppercase rounded shadow-xs">
                              {post.category}
                            </span>
                          </div>

                          <div className="p-5 space-y-3">
                            <h3 className="font-display text-xs sm:text-sm font-bold text-brand-charcoal leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                              {post.title}
                            </h3>

                            <p className="text-xs text-brand-muted leading-relaxed font-medium line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="p-5 pt-0">
                          <div className="border-t border-neutral-100 pt-3 flex items-center justify-between text-[11px] font-mono text-brand-muted">
                            <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                            <span className="flex items-center text-brand-charcoal group-hover:text-brand-orange transition-colors font-bold uppercase tracking-wider text-[10px]">
                              Ler artigo
                              <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white border border-neutral-200 rounded-2xl shadow-xs space-y-2">
                    <p className="text-sm font-bold text-brand-charcoal">Nenhum artigo encontrado para os filtros selecionados.</p>
                    <p className="text-xs text-brand-muted">Tente limpar sua pesquisa de busca ou selecione outra categoria.</p>
                    <button 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('todos');
                        setSelectedTag('');
                        setCurrentPage(1);
                      }}
                      className="inline-flex px-4 py-2 bg-brand-orange text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer mt-2"
                    >
                      Limpar Filtros e Busca
                    </button>
                  </div>
                )
              )}

              {/* PAGINAÇÃO TRADICIONAL (Apenas se o modo for tradicional e houver mais de uma página) */}
              {paginationMode === 'traditional' && totalPages > 1 && !showSkeleton && (
                <div className="flex items-center justify-center space-x-2 pt-6 border-t border-neutral-200/60" id="traditional-pagination">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded-lg border border-neutral-300 text-xs font-mono font-bold text-brand-charcoal bg-white hover:bg-neutral-100 disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    Anterior
                  </button>

                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`w-9 h-9 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                        currentPage === idx + 1 
                          ? 'bg-brand-orange text-white border-brand-orange' 
                          : 'bg-white border border-neutral-300 text-brand-charcoal hover:bg-neutral-100'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded-lg border border-neutral-300 text-xs font-mono font-bold text-brand-charcoal bg-white hover:bg-neutral-100 disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    Próxima
                  </button>
                </div>
              )}

              {/* INFINITE SCROLL SIMULATION ACTION BUTTON */}
              {paginationMode === 'infinite' && totalItems > paginatedPosts.length && (
                <div className="text-center pt-4">
                  <button 
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => {
                        setItemsPerPage(prev => prev + 3);
                        setIsLoading(false);
                      }, 400);
                    }}
                    className="inline-flex items-center px-5 py-2.5 bg-neutral-200 hover:bg-neutral-300 text-brand-charcoal text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    {isLoading ? 'Carregando mais artigos...' : 'Carregar Mais Artigos (Infinite Scroll)'}
                  </button>
                </div>
              )}

            </section>

            {/* SEÇÃO INTEGRADA DE NEWSLETTER COM CAPTAÇÃO REAL */}
            <section className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden" id="newsletter-form-section">
              <div className="absolute inset-0 bg-[radial-gradient(#df4920_1px,transparent_1px)] [background-size:20px_20px] opacity-2 pointer-events-none" />
              
              <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center relative z-10">
                
                <div className="md:col-span-5 space-y-3">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                    <Rss className="w-3.5 h-3.5 animate-pulse" />
                    <span>Informativo Semanal</span>
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-brand-charcoal tracking-tight">
                    Fique por dentro das normas ABNT e materiais de alto padrão
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-medium">
                    Cadastre-se na nossa newsletter técnica. Receba análises de vedação mecânica, comparativos de perfis e novidades sobre conforto acústico e térmico em São Paulo.
                  </p>
                </div>

                <div className="md:col-span-7 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 shadow-xs">
                  
                  {newsletterSubscribed ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-3 py-6"
                    >
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="font-display text-sm font-bold text-brand-charcoal">Assinatura Homologada com Sucesso!</h4>
                      <p className="text-xs text-brand-muted max-w-sm mx-auto font-medium">
                        Obrigado por assinar. Seu lead foi devidamente direcionado para a nossa base de marketing com integração ativa ao <span className="text-brand-orange font-bold">{newsletterPlatform}</span>.
                      </p>
                      <button 
                        onClick={() => setNewsletterSubscribed(false)}
                        className="text-[11px] font-mono font-semibold text-brand-orange underline hover:text-brand-orange/90 cursor-pointer"
                      >
                        Cadastrar outro e-mail
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-[10px] font-mono font-bold text-brand-charcoal mb-1 uppercase">Seu Nome Completo</label>
                          <input 
                            type="text" 
                            required
                            value={newsletterName}
                            onChange={(e) => setNewsletterName(e.target.value)}
                            placeholder="Ex: Roberto Camargo"
                            className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs text-brand-charcoal focus:border-brand-orange focus:outline-none shadow-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono font-bold text-brand-charcoal mb-1 uppercase">Seu E-mail Corporativo</label>
                          <input 
                            type="email" 
                            required
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            placeholder="Ex: roberto@construtora.com.br"
                            className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs text-brand-charcoal focus:border-brand-orange focus:outline-none shadow-xs"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-12 gap-3.5 items-end">
                        <div className="sm:col-span-7">
                          <label className="block text-[10px] font-mono font-bold text-brand-charcoal mb-1 uppercase">Plataforma de Integração Simulada</label>
                          <select
                            value={newsletterPlatform}
                            onChange={(e) => setNewsletterPlatform(e.target.value)}
                            className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs text-brand-charcoal focus:border-brand-orange focus:outline-none shadow-xs cursor-pointer font-semibold"
                          >
                            <option value="RD Station">RD Station Marketing (Padrão Brasil)</option>
                            <option value="Mailchimp">Mailchimp CRM (Internacional)</option>
                            <option value="Brevo">Brevo CRM (Sendinblue)</option>
                            <option value="ActiveCampaign">ActiveCampaign Suite</option>
                            <option value="HubSpot">HubSpot Marketing Enterprise</option>
                          </select>
                        </div>

                        <div className="sm:col-span-5">
                          <button
                            type="submit"
                            disabled={isSubmittingNewsletter}
                            className="w-full inline-flex items-center justify-center px-4 py-3.5 bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-display font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm disabled:opacity-40"
                          >
                            {isSubmittingNewsletter ? 'Processando...' : 'Inscrever-se'}
                          </button>
                        </div>
                      </div>

                      <p className="text-[9px] text-neutral-400 leading-normal font-medium text-center sm:text-left">
                        * Ao assinar, você concorda com a LGPD e o recebimento de e-mails de engenharia. Exportação em CSV disponível no Painel Administrativo.
                      </p>
                    </form>
                  )}

                </div>

              </div>
            </section>

          </div>
        )}

      </div>

      {/* FLOATING ACTION: VOLTAR AO TOPO (Visível ao descer a barra de rolagem) */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-24 z-40 w-11 h-11 rounded-full bg-brand-charcoal text-white hover:bg-brand-orange hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg border border-neutral-700 cursor-pointer"
          title="Voltar ao Topo"
          aria-label="Voltar para o topo da página"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
